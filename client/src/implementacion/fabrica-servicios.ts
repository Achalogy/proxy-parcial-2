import type { InterfaceProcesos } from "./interface-procesos";
import { ProxyProcesos } from "./proxy-procesos";
import { ProxyProcesosSimple } from "./proxy-procesos-simple";


export enum TipoProxy {
  AUDITABLE,
  SIMPLE_SIN_AUDITORIA,
}

export class FabricaServicios {
  public static crearEjecucionProceso(
    tipo: TipoProxy
  ): InterfaceProcesos {
    console.log(`Fábrica: Solicitud para crear proxy tipo [${TipoProxy[tipo]}]`);

    switch (tipo) {
      case TipoProxy.AUDITABLE:
        // Devuelve el proxy original que audita
        return new ProxyProcesos();

      case TipoProxy.SIMPLE_SIN_AUDITORIA:
        // Devuelve el nuevo proxy que solo autentica
        return new ProxyProcesosSimple();

      default:
        // Caso por defecto: devolver el más completo o lanzar un error
        console.warn("Tipo de proxy no reconocido, devolviendo AUDITABLE por defecto.");
        return new ProxyProcesos();
    }
  }
}