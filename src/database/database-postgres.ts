import { sql } from "../conect-database/sql";
import * as bcrypt from "bcrypt"
import Task, { User } from "../types/types";

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
  async createUser({ username, email, password }: User) {
    const handlePass = await bcrypt.hash(password, 10)

    const result = await sql`
    insert into users (username, email, password)
    VALUES (${username}, ${email}, ${handlePass})
    returning id, username, email, created_at;
  `;
    const newUserId = result[0].id;
    return newUserId;
  }

  async listUser() {
    const user = await sql`select  * from users`
    return user
  }

  async findByUsername(username: string) {
    const userResult = await sql`
     select * from users where username = ${username}
    ` 

    return userResult[0]
  }

}



