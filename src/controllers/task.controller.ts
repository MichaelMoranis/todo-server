import { FastifyReply, FastifyRequest } from "fastify";
import { TaskService } from "../services/task.services";
import Task, { TaskParams } from "../types/types";

export class TaskController {
  private taskService = new TaskService();

  // Controlador para criar uma nova tarefa
  async createTask(request: FastifyRequest, reply: FastifyReply) {
    return this.taskService.createTask(request, reply);
  }

  // Controlador para listar tarefas
  async listTask(request: FastifyRequest, reply: FastifyReply) {
    return this.taskService.listTask(request, reply);
  }

  // Controlador para atualizar uma tarefa
  async updateTask(request: FastifyRequest<{ Body: Task; Params: TaskParams }>, reply: FastifyReply) {
    return this.taskService.updateTask(request, reply);
  }

  // Controlador para deletar uma tarefa
  async deleteTask(request: FastifyRequest<{ Params: TaskParams }>, reply: FastifyReply) {
    return this.taskService.deleteTask(request, reply);
  }
}
