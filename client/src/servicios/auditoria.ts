export class Auditoria {
  public auditoriaServicioUsado(user: string, servicio: string): void {
    const formater = new Date().toLocaleString("es-CO", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

    console.log(
      `${user} utilizó el servicio > ${servicio}, a las ${formater}`
    );
  }
}