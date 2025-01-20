// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    // Obtener el valor del campo de texto
    const nombre = document.getElementById("amigo").value.trim();

    // Verificar que el nombre no esté vacío
    if (nombre) {
        // Añadir el nombre a la lista de amigos
        amigosSecretos.push(nombre);
        console.log(`${nombre} ha sido añadido a la lista de amigos secretos.`);
        console.log("Lista actual de amigos:", amigosSecretos);
    } else {
        console.log("Por favor, ingresa un nombre válido.");
    }
}