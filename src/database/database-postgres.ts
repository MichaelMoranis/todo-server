import { sql } from "../conect-database/sql";
import Task, { User } from "../types/types";
import * as bcrypt from "bcrypt"

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
  // ============================================ USERS

  async createUser({ username, email, password }: User): Promise<User[]> {
    const handlePass = await bcrypt.hash(password, 10);
    const result = await sql`
      INSERT INTO users (username, email, password)
      VALUES (${username}, ${email}, ${handlePass})
      RETURNING id, username, email, created_at;
    `;
    return result[0].id;
  }

  async listUser(): Promise<User[]> {
    const users = await sql`SELECT * FROM users`;
    return users.map(user => ({
      id: user.id,
      username: user.username,
      email: user.email,
      password: user.password,
      created_at: user.created_at,
    }));
  }

  async findByUsername(username: string) {
    const userResult = await sql`
    select * from users where username = ${username}
   `
    return userResult[0]
  }


}





