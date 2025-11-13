import colors from 'chalk'
import figlet from 'figlet'
import type { InterfaceProcesos } from './src/implementacion/interface-procesos'
import { FabricaServicios, TipoProxy } from './src/implementacion/fabrica-servicios'
import { input } from '@inquirer/prompts'
import { Command } from "commander";


console.clear()
console.log(
  colors.yellow.bold(figlet.textSync("PROXY"))
)

console.log(
  colors.green.bold("By Miguel Vargas (Acha)")
)

const program = new Command();

program
  .option("-p, --proxy <'simple' | 'auditoria'>")
  .parse(process.argv);

const opts = program.opts();


const mapProxy: Record<string, TipoProxy> = {
  simple: TipoProxy.SIMPLE_SIN_AUDITORIA,
  auditoria: TipoProxy.AUDITABLE,
};

const tipoSeleccionado =
  mapProxy[opts.proxy] ?? TipoProxy.SIMPLE_SIN_AUDITORIA;


const procesoActivo: InterfaceProcesos =
  FabricaServicios.crearEjecucionProceso(tipoSeleccionado);
  
let proceso = 0;

while (true) {
  proceso++;
  const username = await input({
    message: "Usuario ('salir' para salir): "
  });
  if (username == 'salir') process.exit(0)
  const password = await input({
    message: "Contraseña:"
  });

  try {
    await procesoActivo.ejecutarProcesos(proceso, username, password);
  } catch (e: any) {
    console.error(e.message);
  }

  console.log("---------")

}