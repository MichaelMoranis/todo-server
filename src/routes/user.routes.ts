import { FastifyInstance } from 'fastify';
import { userController } from '../controllers/user.controller';

export async function userRoutes(server: FastifyInstance) {
  const UserController = new userController()
  // Usar os métodos estáticos diretamente sem instanciar a classe
  server.post("/register", UserController.createUser);
  server.get("/", UserController.listUser);
  server.post("/login", UserController.loginUser);
}
