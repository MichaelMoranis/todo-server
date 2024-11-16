import { FastifyInstance } from "fastify";
import { verifyToken } from "../middleware/auth.middleware";
import { TaskController } from "../controllers/task.controller";

export async function taskRoutes(server: FastifyInstance) {
    const taskController = new TaskController();

    server.post("/", { preHandler: verifyToken }, taskController.createTask);
    server.get("/", { preHandler: verifyToken }, taskController.listTask);

}