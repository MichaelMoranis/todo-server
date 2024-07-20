import fastify from "fastify";
import Task, { DatabasePostgres } from "../database-postgres";

interface TaskParams {
  id: string;
  params: string;
}

const database = new DatabasePostgres();
const server = fastify();

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

server.listen({ port: PORT })
  .then(address => {
    console.log(`Servidor rodando em ${address}`);
  })
  .catch(err => {
    console.error("Erro ao iniciar o servidor:", err);
    process.exit(1);
  });