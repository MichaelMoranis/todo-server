import { FastifyReply, FastifyRequest } from "fastify";
import { JWT_SECRET } from "../utils/config";
import jwt from "jsonwebtoken";
import { User } from "../types/types";

// Middleware para verificar o token
export async function verifyToken(request: FastifyRequest<{ Headers: { authorization: string } }>,
  reply: FastifyReply) {

  try {
    const authHeader = request.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    const user = jwt.verify(token, JWT_SECRET) as User;
    request.user = user
    // Verifica o token com a chave secreta // Adiciona o usuário ao request, para ser acessado nas rotas

    if (!token) {
      return reply.status(401).send({ error: "Token ausente" });
    }

  } catch (error: any) {
    return reply.status(403).send({ error: "Token inválido" });
  }
}