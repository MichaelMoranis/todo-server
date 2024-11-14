import fastify, { FastifyReply, FastifyRequest } from "fastify";
import cors from "@fastify/cors";
import Task, { DatabasePostgres, User } from "../database-postgres";
import { JWT_SECRET } from "./utils/config";
import * as bcrypt from "bcrypt"
import jwt from "jsonwebtoken";

interface TaskParams {
  id: number;
  params: string;
}

declare module 'fastify' {
  interface FastifyRequest {
    user?: User; // Agora, 'user' está tipado corretamente
  }
}


const database = new DatabasePostgres();
const server = fastify();

server.register(cors, {
  origin: ["http://localhost:5173", "https://todo-server-zdjm.onrender.com"], // Origens permitidas
  methods: ["GET", "POST", "PUT", "DELETE"], // Métodos permitidos
  credentials: true, // Permitir cookies ou autenticação se necessário
});
// rota para adicionar itens na lista array
server.post("/tasks", { preHandler: verifyToken }, async (request, reply) => {
  const body = request.body as Omit<Task, "id">;

  try {
    const newTask = await database.create(body);
    return reply.status(201).send(newTask);
  } catch (error) {
    return reply.status(500).send("Erro interno do servidor");
  }
});

server.get("/tasks", async (req, reply) => {
  const tasks = await database.list();

  return reply.send(tasks);
});

// rotas para atualizar itens na lista
server.put<{ Body: Task, Params: TaskParams }>("/tasks/:id", async (request, reply) => {
  const { newtext } = request.body
  const { id } = request.params

  try {
    await database.update({ id, newtext })

    return reply.status(204).send();
  } catch (error) {
    console.log("deu erro ao atualizar")
    return reply.status(500).send({ error: "erro na atualizaçao" })
  }

})

// rota para deletar itens na lista
server.delete<{ Params: TaskParams }>("/tasks/:id", async (request, reply) => {
  const { id } = request.params;

  await database.delete(id);
  return reply.status(204).send();
});

// rotas para adicionar, listar, deletar e atualizar dados na tabela de usuarios (users)
server.post("/register", async (request, reply) => {
  const { username, email, password } = request.body as Omit<User, "id">;

  try {
    const newUser = await database.createUser({ username, email, password });
    console.log("usuario cadastrado com sucesso" + newUser)
    return reply.status(201).send(newUser)
  } catch (error) {
    console.log("erro do uzuario" + error)
    return reply.status(500).send("nao foi possivel criar o usuario")
  }
})

// listar usuarios da tabela users 
server.get("/register", async (req, reply) => {
  const users = await database.listUser();

  return reply.send(users);
});

//rota de login tabela users
server.post<{ Body: Omit<User, "id"> }>("/login", async (request, reply) => {
  const { username, password } = request.body as Omit<User, "id">;
  const user = await database.findByUsername(username)

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return reply.status(401).send({ error: `credenciais invalidas !!!! ${user.password}` })
  }
  const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: "1h" })
  return reply.send({ token })
})


// Middleware para verificar o token
async function verifyToken(request: FastifyRequest<{ Headers: { authorization: string } }>,
  reply: FastifyReply) {
  const authHeader = request.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; // Extrair o token da string "Bearer <token>"

  if (!token) {
    return reply.status(401).send({ error: "Token ausente" });
  }

  try {
    const user = jwt.verify(token, JWT_SECRET) as User;
    request.user = user
    // Verifica o token com a chave secreta // Adiciona o usuário ao request, para ser acessado nas rotas
  } catch (error: any) {
    return reply.status(403).send({ error: "Token inválido" });
  }
}




const PORT = Number(process.env.PORT) || 3333;
const HOST = "0.0.0.0";

server.listen({
  port: PORT,
  host: HOST,
});

console.log("servidor rodando ");
