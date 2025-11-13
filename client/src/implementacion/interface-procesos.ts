export interface InterfaceProcesos {
  ejecutarProcesos(
    idProceso: number,
    usuario: string,
    password: string
  ): void;
}