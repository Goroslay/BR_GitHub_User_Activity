
import { datos } from "../commands/obtenerActividad.js";

let actividades = []; // Variable para almacenar las actividades

// Cargar actividades al inicio
const cargarActividades = async () => {
    try {
        actividades = await datos(); // Esperar la resolución de la función asíncrona
    } catch (error) {
        console.error("Error al cargar actividades:", error);
    }
};

await cargarActividades(); // Asegúrate de ejecutar esto antes de usar `datosFiltrados`

export const datosFiltrados = (filtro) => 
    actividades.filter((a) => filtro === a.type);
