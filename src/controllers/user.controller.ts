import { FastifyReply, FastifyRequest } from "fastify";
import { UserService } from "../services/user.services";


export class UserController {
  private userService = new UserService();
  async createUser(request: FastifyRequest, reply: FastifyReply) {
      return await this.userService.createUser(request, reply);
    }
  
    async listUser(request: FastifyRequest, reply: FastifyReply) {
      return await this.userService.listUser(request, reply);
    }

    async loginUser(request: FastifyRequest, reply: FastifyReply) {
      // Repassa os objetos diretamente ao serviço
      return this.userService.loginUser(request, reply);
    }
      
    }
  

