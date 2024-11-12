import fastify from "fastify";
import cors from "@fastify/cors";
import Task, { DatabasePostgres, User } from "../database-postgres";

interface TaskParams {
  id: number;
  params: string;
}

const database = new DatabasePostgres();
const server = fastify();

// server.register(cors, {
//   origin: (origin, callback) => {
//     const allowedOrigins = ["http://localhost:5173", "http://localhost:3333"];
//     if (!origin || allowedOrigins.includes(origin)) {
//       // Permitir a origem se ela estiver na lista de origens permitidas ou se não houver origem (por exemplo, solicitações internas)
//       callback(null, true);
//     } else {
//       // Rejeitar a origem se ela não estiver na lista de origens permitidas
//       callback(new Error("Not allowed by CORS"), false);
//     }
//   },
//   methods: ["GET", "POST", "PUT", "DELETE"], // Permitir os métodos que você vai usar
// });

server.register(cors, {
  origin: ["http://localhost:5173", "http://localhost:3333"], // Origens permitidas
  methods: ["GET", "POST", "PUT", "DELETE"], // Métodos permitidos
  credentials: true, // Permitir cookies ou autenticação se necessário
});


server.post("/tasks", async (request, reply) => {
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

server.put<{Body: Task, Params: TaskParams}>("/tasks/:id", async (request, reply) => {
  const { newtext } = request.body
  const { id } = request.params
 
  try {
    await database.update({id, newtext})

    return reply.status(204).send();
  } catch (error) {
    console.log("deu erro ao atualizar")
    return reply.status(500).send({error: "erro na atualizaçao"})
  }

})

server.delete<{ Params: TaskParams }>("/tasks/:id", async (request, reply) => {
  const { id } = request.params;

  await database.delete(id);
  return reply.status(204).send();
});

// rotas para adicionar, listar, deletar e atualizar dados na tabela de usuarios (users)
server.post("/register", async (request, reply) => {
  const body = request.body as Omit<User, "id">;

  try {
    const newUser = await database.createUser(body);
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

const PORT = Number(process.env.PORT) || 3333;
const HOST = "0.0.0.0";

server.listen({
  port: PORT,
  host: HOST,
});

console.log("servidor rodando ");
