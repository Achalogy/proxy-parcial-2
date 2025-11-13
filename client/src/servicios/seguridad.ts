import { PostgresDatabase } from "../db/postgres-database";

export class Seguridad {
  static db = new PostgresDatabase()

  public async autorizacion(user: string, password: string): Promise<boolean> {
    const validUser = await Seguridad.db.validateUser({
      username: user,
      password
    })

    if (validUser) {
      console.log(`Usuario ${user} autorizado`);
      return true;
    } else {
      console.log(`Usuario ${user} no autorizado`);
      return false;
    }
  }
}