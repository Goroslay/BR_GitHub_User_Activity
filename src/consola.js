import { mostrar } from "./commands/mostrarActividad.js";
import {obtener} from "./commands/obtenerActividad.js";

export async function main() {
    try {
        const [actividades, usuario] = await obtener();

        if (actividades.length === 0) {
            console.log("No se encontraron eventos recientes para este usuario.");
        } else {
            mostrar(actividades, usuario);
        }
    } catch (error) {
        console.error("Error:", error.message);
    }
}