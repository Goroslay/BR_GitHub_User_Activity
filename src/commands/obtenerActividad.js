import inquirer from "inquirer";

export async function obtener(){

    const pregunta = await inquirer.prompt({
        name: "usuario",
        type: "input",
        message: "¿Cuál es el usuario a revisar?",
    });

    const url = `https://api.github.com/users/${pregunta.usuario}/events`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Error al obtener datos: ${response.status}`);
        }

        const data = await response.json();
        return [data, pregunta.usuario];
    } catch (error) {
        throw new Error(`No se pudo obtener la actividad: ${error.message}`);
    }

}
