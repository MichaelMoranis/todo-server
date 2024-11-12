import { sql } from "./sql";

export default interface Task {
  newtext: string;
  isChecked?: boolean;
  id?: number
}

export interface User {
  username: string;
  email: string;
  password: string;
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

  // funções para gerenciamento dos dados tabela users 
  async createUser(user: User) {
    const { username, email, password } = user;

    const result = await sql`
    insert into users (username, email, password)
    VALUES (${username}, ${email}, ${password})
    returning id, username, email, created_at;
  `;
    const newUserId = result[0].id;
    return newUserId;
  }

  async listUser() {
    const user = await sql`select  * from users`
    return user
  }

}



