import { Pool } from "pg";

export class PostgresDatabase {
  private pool: Pool;

  public constructor() {
    this.pool = new Pool({
      connectionString: import.meta.env.DATABASE_URL!
    });
  }

  public async validateUser({
    username,
    password
  }: {
    username: string;
    password: string;
  }) {
    const query = `
      SELECT user_id, username, name
      FROM "user"
      WHERE username = $1 AND password = $2
      LIMIT 1;
    `;

    const result = await this.pool.query(query, [username, password]);

    if (result.rows.length === 0) {
      return null;
    }

    return result.rows[0];
  }
}
