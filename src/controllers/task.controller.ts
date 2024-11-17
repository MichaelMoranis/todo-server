// import { FastifyReply, FastifyRequest } from "fastify"
import { DatabasePostgres } from "../database/database-postgres"
// import Task from "../types/types";

import { FastifyInstance } from "fastify";
import Task, { TaskParams } from "../types/types";
import { verifyToken } from "../middleware/verifyToken";

const database = new DatabasePostgres()

// export class TaskController {
//     private database: DatabasePostgres

//     constructor() {
//         this.database = new DatabasePostgres()
//     }

    // async createTask(request: FastifyRequest, reply: FastifyReply) {
    //     const body = request.body as Omit<Task, "id">;

    //     try {
    //         const newTask = await this.database.createTask(body);
    //         return reply.status(201).send(newTask);
    //     } catch (error) {
    //         return reply.status(500).send("Erro interno do servidor");
    //     }
    // }

//     async listTask(request: FastifyRequest, reply: FastifyReply) {
//         const tasks = await this.database.listTask();

//         return reply.send(tasks);
//     }

//     async updateTask(request: FastifyRequest, reply: FastifyReply) {
//         const { newtext } = request.body as Task
//         const { id } = request.params as { id: number }

//         try {
//             await this.database.updateTask({ id, newtext })

//             return reply.status(204).send();
//         } catch (error) {
//             console.log("deu erro ao atualizar")
//             return reply.status(500).send({ error: "erro na atualizaçao" })
//         }
//     }

//     async deleteTask(request: FastifyRequest, reply: FastifyReply) {
//         const { id } = request.params as { id: number }


//         await this.database.deleteTask(id);
//         return reply.status(204).send();
//     }

// }


export const taskRoutes = (server: FastifyInstance) => {
    server.post("/tasks", { preHandler: verifyToken }, async (request, reply) => {
        const body = request.body as Omit<Task, "id">;

        try {
            const newTask = await database.createtaskController(body);
            return reply.status(201).send(newTask);
        } catch (error) {
            return reply.status(500).send("Erro interno do servidor");
        }
    });

    server.get("/tasks", { preHandler: verifyToken }, async (req, reply) => {
        const tasks = await database.listTaskController();

        return reply.send(tasks);
    });

    // rotas para atualizar itens na lista
    server.put<{ Body: Task, Params: TaskParams }>("/tasks/:id", async (request, reply) => {
        const { newtext } = request.body
        const { id } = request.params

        try {
            await database.updateTaskController({ id, newtext })

            return reply.status(204).send();
        } catch (error) {
            console.log("deu erro ao atualizar")
            return reply.status(500).send({ error: "erro na atualizaçao" })
        }

    })

    // rota para deletar itens na lista
    server.delete<{ Params: TaskParams }>("/tasks/:id", async (request, reply) => {
        const { id } = request.params;

        await database.deleteTaskControllers(id);
        return reply.status(204).send();
    });

}