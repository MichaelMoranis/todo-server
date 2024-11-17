import { TaskService } from "../services/task.services";
import { UserService } from "../services/user.services";
import Task, {  User } from "../types/types";

export class DatabasePostgres {
  private taskService = new TaskService();
  private userService = new UserService();
  


    async listTaskController(): Promise<Task[]> {
      return await this.taskService.list();
    }

    async createtaskController(task: Task): Promise<number> {
      return await this.taskService.create(task);
    }
  
    async updateTaskController(task: Task): Promise<Task> {
      return await this.taskService.update(task);
    }
  
    async deleteTaskControllers(id: number): Promise<void> {
      await this.taskService.delete(id);
    }

    /// ======================================================

    async createUser(user: User): Promise<User[]> {
      return await this.userService.createUser(user);
    }
  
    async listUsers(): Promise<User[]> {
      return await this.userService.listUser();
    }
  
    async findByUsername(username: string) {
      return await this.userService.findByUsername(username);
  }

 }





