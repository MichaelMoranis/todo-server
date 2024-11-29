import { DatabasePostgres } from "../database/database-postgres";
import Task, { TaskParams } from "../types/types";
import { FastifyReply, FastifyRequest } from "fastify";

export class TaskService {
  private database: DatabasePostgres

  constructor() {
    this.database = new DatabasePostgres()
  }

  async createTask(request: FastifyRequest, reply: FastifyReply) {
    const body = request.body as Omit<Task, "id">;

    try {
      const newTask = await this.database.create(body);
      return reply.status(201).send(newTask);
    } catch (error) {
      return reply.status(500).send("Erro interno do servidor");
    }
  }

  async listTask(request: FastifyRequest, reply: FastifyReply) {
    const tasks = await this.database.list();
    return reply.send(tasks);
  }

  async updateTask(request: FastifyRequest, reply: FastifyReply) {
    const { newtext } = request.body as Task
    const { id } = request.params as Task

    try {
      await this.database.update({ id, newtext })
      return reply.status(204).send();
    } catch (error) {
      console.log("deu erro ao atualizar")
      return reply.status(500).send({ error: "erro na atualizaçao" })
    }
  }

  async deleteTask(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.params as TaskParams;
    await this.database.delete(id);
    return reply.status(204).send({ message: "item deletado com sucesso" });
  }
}
