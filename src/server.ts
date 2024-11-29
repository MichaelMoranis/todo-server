import fastify from "fastify";
import cors from "@fastify/cors";
import { User } from "./types/types";
import { userRoutes } from "./routes/user.routes";
import { taskRoutes } from "./routes/task.routes";
// import { taskRoutes } from "./routes/task.routes";

declare module 'fastify' {
  interface FastifyRequest {
    user?: User; // Agora, 'user' está tipado corretamente
  }
}

const server = fastify();

server.register(userRoutes);
server.register(taskRoutes);

server.register(cors, {
  origin: [
    "http://localhost:5173",
    "https://app-tarefa.vercel.japp",
    "https://todo-server-9m5t.onrender.com",
  ], // Origens permitidas
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Métodos permitidos
  credentials: true, // Permitir cookies ou autenticação se necessário
});

server.addHook("onSend", async (request, reply, payload) => {
  reply.header("Access-Control-Allow-Origin", request.headers.origin || "*");
  reply.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  reply.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  return payload;
});

export default server
