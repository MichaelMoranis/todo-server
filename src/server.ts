import fastify, { FastifyReply, FastifyRequest } from "fastify";
import cors from "@fastify/cors";
import { taskRoutes } from "./routes/taskRoutes";
import { User } from "./types/types";
import { userRoutes } from "./routes/userRoutes";

declare module 'fastify' {
  interface FastifyRequest {
    user?: User; // Agora, 'user' está tipado corretamente
  }
}

const server = fastify();
taskRoutes(server)
userRoutes(server)

server.register(cors, {
  origin: [
    "http://localhost:5173",
    "https://app-tarefa.vercel.app",
    "https://todo-server-zdjm.onrender.com"
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

const PORT = Number(process.env.PORT) || 3333;
const HOST = "0.0.0.0";

server.listen({
  port: PORT,
  host: HOST,
});

