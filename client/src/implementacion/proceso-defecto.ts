import type { InterfaceProcesos } from "./interface-procesos";

export class ProcesoDefecto implements InterfaceProcesos {
  // @Override no es necesario en TypeScript
  public ejecutarProcesos(
    idProceso: number,
    usuario: string,
    password: string
  ) {
    console.log(`proceso ${idProceso} en acción`);
    console.log(`proceso ${idProceso} finalizado`);
  }
}