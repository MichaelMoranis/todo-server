import { FastifyInstance } from "fastify";
import { userController } from "../controllers/user.Controller";

export async function userRoutes(server: FastifyInstance) {
   const UserController = new userController()

   server.post('/register', UserController.createUser)
   server.post('/', UserController.listUser)
   server.post('/login', UserController.loginUser)
}