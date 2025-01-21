// Array que almacena los nombres de los amigos ingresados
let amigos = [];

// Agrega el nombre a la lista
function agregarAmigo() {
  const amigoInput = document.getElementById("amigo");
  const nombre = amigoInput.value.trim();

  // Verifica si el nombre no está vacío
  if (nombre !== "") {

    // Agrega el nombre
    amigos.push(nombre); 

    // Actualiza la lista en la página
    actualizarLista(); 

    // Limpia el campo de entrada
    amigoInput.value = ""; 

  } else {

    // Alerta si el campo está vacío
    alert("Por favor ingresa un nombre válido."); 
  }
}

// Actualiza la lista de amigos
function actualizarLista() {
  const listaAmigos = document.getElementById("listaAmigos");

  // Limpia la lista antes de actualizar
  listaAmigos.innerHTML = ""; 

  // Añade cada amigo a la lista visual
  amigos.forEach((amigo) => {
    const li = document.createElement("li");
    li.textContent = amigo;
    listaAmigos.appendChild(li);
  });
}

// Realiza el sorteo de un solo amigo secreto
function sortearAmigo() {
  if (amigos.length < 2) {
    alert("Necesitas al menos dos amigos para realizar el sorteo.");
    return;
  }

  // Selecciona un amigo aleatorio de la lista
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSecreto = amigos[indiceAleatorio];

  // Muestra el resultado del sorteo
  mostrarResultado(amigoSecreto);
}

// Muestra el resultado del sorteo en la página
function mostrarResultado(amigoSecreto) {
  const resultadoDiv = document.getElementById("resultado");

  // Limpia los resultados anteriores
  resultadoDiv.innerHTML = ""; 

  // Muestra el nombre del amigo secreto sorteado
  const li = document.createElement("li");
  li.textContent = `Tu amigo secreto es: ${amigoSecreto}`;
  resultadoDiv.appendChild(li);
}
