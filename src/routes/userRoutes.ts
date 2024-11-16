import { FastifyInstance } from "fastify";
import { User } from "../types/types";
import { JWT_SECRET } from "../utils/config";
import jwt from "jsonwebtoken";
import { DatabasePostgres } from "../database/database-postgres";
import bcrypt from "bcrypt"

const database = new DatabasePostgres()

export const userRoutes = (server: FastifyInstance) => {
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
    const users = await database.listUsers();
  
    return reply.send(users);
  });
  
  //rota de login tabela users
  server.post<{ Body: Omit<User, "id"> }>("/login", async (request, reply) => {
    const { username, password } = request.body as Omit<User, "id">;
    const user = await database.findUserByUsername(username)
  
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return reply.status(401).send({ error: `credenciais invalidas !!!! ${user?.password}` })
    }
    const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: "1h" })
    return reply.send({ token })
  })
  
}