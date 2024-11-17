import { FastifyInstance } from "fastify";
import { verifyToken } from "../middleware/verifyToken";
import Task, { TaskParams } from "../types/types";
import { DatabasePostgres } from "../database/database-postgres";

const database = new DatabasePostgres()

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



// export async function taskRoutes(server: FastifyInstance) {
//     const taskController = new TaskController()

    // server.post("/tasks", {preHandler: verifyToken}, taskController.createTask)
//     server.get("/tasks", {preHandler: verifyToken}, taskController.listTask)
//     server.put("/tasks/:id", {preHandler: verifyToken}, taskController.updateTask)
//     server.delete("/tasks/:id", {preHandler: verifyToken}, taskController.deleteTask)


// }
