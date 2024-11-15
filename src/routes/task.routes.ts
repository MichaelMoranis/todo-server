import { FastifyInstance } from "fastify";
import { TaskController } from "../controllers/task.controller";
import { verifyToken } from "../middlewares/auth.middleware";

export async function taskRoutes(server: FastifyInstance) {
    const taskController = new TaskController();

    server.post("/", { preHandler: verifyToken }, taskController.createTask);
    server.get("/", { preHandler: verifyToken }, taskController.listTask);

}