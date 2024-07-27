import { sql } from "./sql";

export default interface Task {
  newtext: string;
  isChecked: boolean;
}

export class DatabasePostgres {
  async list() {
    const task = await sql`select * from tasks`;
    return task;
  }

async create(task: Task) {
    const { newtext, isChecked } = task;
    const result = await sql`
        insert into tasks (newtext, isChecked)
        VALUES (${newtext}, ${isChecked})
        returning id, newtext, isChecked;
     `;
     const newTaskId = result[0].id
     return newTaskId
  }

  async delete(id: number) {
    // Remove a tarefa com o ID fornecido
    await sql`
        DELETE FROM tasks
        WHERE id = ${id};
    `;
}
}
