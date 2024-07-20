import { sql } from "./sql";

export default interface Task {
  id?: number;
  newText: string;
  isChecked: boolean;
}

export class DatabasePostgres {
  async list() {
    const task = await sql`select * from tasks`;
    return task;
  }

async create(task: Task) {
    const { newText, isChecked } = task;
    const result = await sql`
        insert into tasks (newText, isChecked)
        VALUES (${newText}, ${isChecked})
        returning id;
     `;
     const newTaskId = result[0].id
     return newTaskId
  }

  async delete(id: string) {
    // Remove a tarefa com o ID fornecido
    await sql`
        DELETE FROM tasks
        WHERE id = ${id};
    `;
}
}
