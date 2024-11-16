import { FastifyReply, FastifyRequest } from "fastify"
import { DatabasePostgres } from "../database/database-postgres";
import { Task } from "../types/types";



export class TaskController {
    private database: DatabasePostgres

    constructor() {
        this.database = new DatabasePostgres()
    }

    async createTask(request: FastifyRequest, reply: FastifyReply) {
        const body = request.body as Omit<Task, "id">;

        try {
            const newTask = await this.database.createTask(body);
            return reply.status(201).send(newTask);
        } catch (error) {
            return reply.status(500).send("Erro interno do servidor");
        }
    }

    async listTask(request: FastifyRequest, reply: FastifyReply) {
        const tasks = await this.database.listTasks();

        return reply.send(tasks);
    }

    async updateTask(request: FastifyRequest, reply: FastifyReply) {
        const { newtext } = request.body as Task
        const { id } = request.params as { id: number }

        try {
            await this.database.updateTask({ id, newtext })

            return reply.status(204).send();
        } catch (error) {
            console.log("deu erro ao atualizar")
            return reply.status(500).send({ error: "erro na atualizaçao" })
        }
    }

    async deleteTask(request: FastifyRequest, reply: FastifyReply) {
        const { id } = request.params as { id: number }


        await this.database.deleteTask(id);
        return reply.status(204).send();
    }

}