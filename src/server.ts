import fastify from "fastify";
import cors from "@fastify/cors"
import Task, { DatabasePostgres } from "../database-postgres";

interface TaskParams {
  id: string;
  params: string;
}

const database = new DatabasePostgres();
const server = fastify();

server.register(cors, {
  origin: ['http://localhost:5173', 'https://todo-server-5f4x.onrender.com/'], // Permitir a origem do seu frontend local e em produção
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Permitir os métodos que você vai usar
});

server.post("/tasks", async (request, reply) => {
  const body = request.body as Omit<Task, "id">

  await database.create(body);

  console.log(database.list());
  return reply.status(201).send();
});

server.get("/tasks", () => {
  const tasks = database.list();

  return tasks;
});

server.delete<{Params: TaskParams}>("/tasks/:id", async (request, reply) => {
  const { id } = request.params

  await database.delete(id)
  return reply.status(204).send()
});

const PORT = Number(process.env.PORT) || 3333;
const HOST = "0.0.0.0";

server.listen({ 
  port: PORT, 
  host: HOST  
})

console.log("servidor rodando ")
