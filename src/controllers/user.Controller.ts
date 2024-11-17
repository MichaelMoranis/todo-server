import { FastifyReply, FastifyRequest } from "fastify";
import { DatabasePostgres } from "../database/database-postgres";
import { User } from "../types/types";
import * as jwt from "jsonwebtoken"
import * as brcrypt from "bcrypt"
import { JWT_SECRET } from "../utils/config";

export class UserController {
    private database: DatabasePostgres

    constructor() {
        this.database = new DatabasePostgres()
    }

    async createUser(request: FastifyRequest, reply: FastifyReply) {
        const { username, email, password } = request.body as Omit<User, "id">;
  
        try {
          const newUser = await this.database.createUser({ username, email, password });
          console.log("usuario cadastrado com sucesso" + newUser)
          return reply.status(201).send(newUser)
        } catch (error) {
          console.log("erro do uzuario" + error)
          return reply.status(500).send("nao foi possivel criar o usuario")
        }
    }

    async listUser(request: FastifyRequest, reply: FastifyReply) {
        const users = await this.database.listUsers();
  
        return reply.send(users);
    }


    async loginUser(request: FastifyRequest, reply: FastifyReply) {
      const { username, password } = request.body as Omit<User, "id">;

     const user = await this.database.findByUsername(username)
   
     if (!user || !(await brcrypt.compare(password, user.password))) {
       return reply.status(401).send({ error: `credenciais invalidas !!!! ${user?.password}` })
     }
     const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: "1h" })
     return reply.send({ token })
   }
  

}