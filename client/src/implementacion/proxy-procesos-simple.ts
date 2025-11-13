import type { InterfaceProcesos } from "./interface-procesos";
import { Seguridad } from "../servicios/seguridad";
import { ProcesoDefecto } from "./proceso-defecto";

export class ProxyProcesosSimple implements InterfaceProcesos {
  public async ejecutarProcesos(
    idProceso: number,
    usuario: string,
    password: string
  ) {
    // 1. Verificación de seguridad
    const securityService = new Seguridad();
    if (!(await securityService.autorizacion(usuario, password))) {
      throw new Error(
        `El usuario '${usuario}' no tiene privilegios para ejecutar el proceso`
      );
    }

    // 2. Ejecución del proceso real
    const ejecutorProcess = new ProcesoDefecto();
    ejecutorProcess.ejecutarProcesos(idProceso, usuario, password);

    // 3. (Sin auditoría)
    // Este proxy omite intencionalmente el paso de auditoría.
  }
}