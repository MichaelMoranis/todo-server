import { sql } from "../database/sql";
import * as bcrypt from "bcrypt";
import { User } from "../types/types";

export class UserService {
  async createUser({ username, email, password }: User): Promise<number> {
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
    return users;
  }

  async findByUsername(username: string): Promise<User | null> {
    const userResult = await sql`
      SELECT * FROM users WHERE username = ${username}
    `;
    return userResult[0] || null;
  }
}
