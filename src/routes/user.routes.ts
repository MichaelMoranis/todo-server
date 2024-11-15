import { FastifyInstance } from 'fastify';
import {  userController } from '../controllers/user.controller';

export async function userRoutes(server: FastifyInstance) {
  const UserController = new userController();

  // Rota para registrar um usuário
  server.post("/register", UserController.registerUser);

  // Rota para listar usuários
  server.get("/", UserController.listUser);

  // Rota para login
  server.post("/login", UserController.loginUser);
}