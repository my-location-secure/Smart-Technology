document.addEventListener("DOMContentLoaded", () => {
  console.log("Sitio cargado correctamente.");
});

document.getElementById("formulario-contacto").addEventListener("submit", function(e) {
  e.preventDefault(); // Evita que se recargue la página

  // Validación básica
  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();

  if (nombre && email && mensaje) {
    document.getElementById("respuesta").classList.remove("oculto");
    this.reset(); // Limpia el formulario
  } else {
    alert("Por favor completa todos los campos.");
  }
});
