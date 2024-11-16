import { TaskService } from "../services/task.services";
import { UserService } from "../services/user.services";
import Task, {  User } from "../types/types";

export class DatabasePostgres {
  private taskService = new TaskService();
  private userService = new UserService();


    async listTask(): Promise<Task[]> {
      return await this.taskService.list();
    }

    async createTask(task: Task): Promise<number> {
      return await this.taskService.create(task);
    }
  
    async updateTask(task: Task): Promise<Task> {
      return await this.taskService.update(task);
    }
  
    async deleteTask(id: number): Promise<void> {
      await this.taskService.delete(id);
    }

    async createUser(user: User): Promise<number> {
      return await this.userService.createUser(user);
    }
  
    async listUsers(): Promise<User[]> {
      return await this.userService.listUser();
    }
  
    async findUserByUsername(username: string): Promise<User | null> {
      return await this.userService.findByUsername(username);
    }

 }





