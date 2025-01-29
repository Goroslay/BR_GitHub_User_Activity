import chalk from "chalk";

export function mostrar(data, username) {
    const opcionesFecha = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour12: true,
        timeZone: "UTC",
    };

    const intlFormatter = new Intl.DateTimeFormat("es-ES", opcionesFecha);

    data.forEach(event => {
        const fecha = intlFormatter.format(new Date(event.created_at));
        console.log(
            `${chalk.bold(fecha)}: El usuario ${chalk.blue(username)} realizó un ${chalk.yellow(event.type)} en el repositorio ${chalk.magenta(event.repo.name)}`
        );
    });
}
