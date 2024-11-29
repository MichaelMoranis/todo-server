import { TaskController } from "../controllers/task.controller";
import server from "../server";
import { verifyToken } from "../middleware/verifyToken";
import Task, { TaskParams } from "../types/types";

export async function taskRoutes() {
  const taskController = new TaskController();

  server.post("/tasks", { preHandler: verifyToken }, async (request, reply) => {
    return taskController.createTask(request, reply);
  });

  server.get("/tasks", { preHandler: verifyToken }, async (request, reply) => {
    return taskController.listTask(request, reply);
  });

  server.put<{ Body: Task, Params: TaskParams }>("/tasks/:id", async (request, reply) => {
    return taskController.updateTask(request, reply);
  });

  server.delete<{ Params: TaskParams }>("/tasks/:id", async (request, reply) => {
    return taskController.deleteTask(request, reply);
  });
}
