import { sql } from "../database/sql";
import { Task } from "../types/types";

export class TaskService {
  async list(): Promise<Task[]> {
    const tasks = await sql`SELECT * FROM tasks`;
    return tasks;
  }

  async create(task: Task): Promise<number> {
    const { newtext, isChecked } = task;
    const result = await sql`
      INSERT INTO tasks (newtext, isChecked)
      VALUES (${newtext}, ${isChecked})
      RETURNING id, newtext, isChecked;
    `;
    return result[0].id;
  }

  async update(task: Task): Promise<Task> {
    const { id, newtext } = task;
    const result = await sql`
      UPDATE tasks
      SET newtext = ${newtext}
      WHERE id = ${id}
      RETURNING id, newtext;
    `;
    return result[0];
  }

  async delete(id: number): Promise<void> {
    await sql`
      DELETE FROM tasks
      WHERE id = ${id};
    `;
  }
}
