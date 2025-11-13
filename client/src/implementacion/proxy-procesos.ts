import type { InterfaceProcesos } from "./interface-procesos";
import { Auditoria } from "../servicios/auditoria";
import { Seguridad } from "../servicios/seguridad";
import { ProcesoDefecto } from "./proceso-defecto";

export class ProxyProcesos implements InterfaceProcesos {
  public async ejecutarProcesos(
    idProceso: number,
    usuario: string,
    password: string
  ) {
    // 1. Verificación de seguridad
    const securityService = new Seguridad();
    if (!(await securityService.autorizacion(usuario, password))) {
      // En TypeScript/JS, lanzamos un 'Error'
      throw new Error(
        `El usuario '${usuario}' no tiene privilegios para ejecutar el proceso`
      );
    }

    // 2. Ejecución del proceso real (si la seguridad pasa)
    const ejecutorProcess = new ProcesoDefecto();
    ejecutorProcess.ejecutarProcesos(idProceso, usuario, password);

    // 3. Auditoría post-ejecución
    const audit = new Auditoria();
    // En JS/TS, .name obtiene el nombre de la clase
    audit.auditoriaServicioUsado(usuario, ProcesoDefecto.name);
  }
}