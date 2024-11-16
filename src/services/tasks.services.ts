
import { sql } from "../conect-database/sql";
import { Task } from "../types/types";



export class TaskService {

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
    
      async update(task: Task) {
        const { id, newtext } = task
        const result = await sql`
          update tasks
          set newtext = ${newtext}
          where id = ${id}
    
          returning id, newtext
        `
        return result[0]
      }
    
      async delete(id: number) {
        // Remove a tarefa com o ID fornecido
        await sql`
            DELETE FROM tasks
            WHERE id = ${id};
        `;
      }
    
}