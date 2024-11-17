import * as bcrypt from "bcrypt";
import { User } from "../types/types";
import { sql } from "../conect-database/sql";

export class UserService {
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

