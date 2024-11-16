import { FastifyInstance } from "fastify";
import { verifyToken } from "../middleware/verifyToken";
import { taskController } from "../controllers/task.controller";

// const database = new DatabasePostgres()

// export const taskRoutes = (server: FastifyInstance) => {
//     server.post("/tasks", { preHandler: verifyToken }, async (request, reply) => {
//         const body = request.body as Omit<Task, "id">;

//         try {
//             const newTask = await database.create(body);
//             return reply.status(201).send(newTask);
//         } catch (error) {
//             return reply.status(500).send("Erro interno do servidor");
//         }
//     });

//     server.get("/tasks", { preHandler: verifyToken }, async (req, reply) => {
//         const tasks = await database.list();

//         return reply.send(tasks);
//     });

//     // rotas para atualizar itens na lista
//     server.put<{ Body: Task, Params: TaskParams }>("/tasks/:id", async (request, reply) => {
//         const { newtext } = request.body
//         const { id } = request.params

//         try {
//             await database.update({ id, newtext })

//             return reply.status(204).send();
//         } catch (error) {
//             console.log("deu erro ao atualizar")
//             return reply.status(500).send({ error: "erro na atualizaçao" })
//         }

//     })

//     // rota para deletar itens na lista
//     server.delete<{ Params: TaskParams }>("/tasks/:id", async (request, reply) => {
//         const { id } = request.params;

//         await database.delete(id);
//         return reply.status(204).send();
//     });

// }



export async function taskRoutes(server: FastifyInstance) {
    const TaskController = new taskController()

    server.post("/tasks", {preHandler: verifyToken}, TaskController.createTask)
    server.get("/tasks", {preHandler: verifyToken}, TaskController.listTask)
    server.put("/tasks/:id", {preHandler: verifyToken}, TaskController.updateTask)
    server.delete("/tasks/:id", {preHandler: verifyToken}, TaskController.deleteTask)


}
