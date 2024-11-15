import { FastifyReply, FastifyRequest } from "fastify";
import { DatabasePostgres } from "../database-postgres/database-postgres";
import { User } from "../types/types";
import { JWT_SECRET } from "../utils/config";
import * as bcrypt from "bcrypt"
import jwt from "jsonwebtoken";

export class userController {
    private database: DatabasePostgres

    constructor() {
        this.database = new DatabasePostgres
    }

    // rotas para adicionar, listar, deletar e atualizar dados na tabela de usuarios (users)
    async registerUser(request: FastifyRequest, reply: FastifyReply) {
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
    };

    async loginUser(request: FastifyRequest, reply: FastifyReply) {
        const { username, password } = request.body as Omit<User, "id">;
        const user = await this.database.findUserByUsername(username)

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return reply.status(401).send({ error: `credenciais invalidas !!!! ${user?.password}` })
        }
        const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: "1h" })
        return reply.send({ token })
    }
}