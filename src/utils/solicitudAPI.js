export const solicitud = async (usuario) => {
    const response = await fetch(`https://api.github.com/users/${usuario}/events`);
    return response.json();
};