document.addEventListener("DOMContentLoaded", () => {
  const botones = document.querySelectorAll("button");
  const estado = JSON.parse(localStorage.getItem("ramosAprobados")) || {};

  botones.forEach(boton => {
    const id = boton.dataset.id;
    if (estado[id]) {
      boton.classList.add("aprobado");
    }

    boton.addEventListener("click", () => {
      boton.classList.toggle("aprobado");
      estado[id] = boton.classList.contains("aprobado");
      localStorage.setItem("ramosAprobados", JSON.stringify(estado));
    });
  });
});
// Clave para almacenamiento local
const STORAGE_KEY = "ramosAprobados";

document.addEventListener("DOMContentLoaded", () => {
  const botones = document.querySelectorAll("button");
  const progreso = cargarProgreso();

  // Restaurar estado guardado
  botones.forEach(boton => {
    const id = boton.dataset.id;

    // Marcar como aprobado si estaba guardado
    if (progreso[id]) {
      boton.classList.add("aprobado");
    }

    // Evento de clic para cambiar estado y guardar
    boton.addEventListener("click", () => {
      boton.classList.toggle("aprobado");
      progreso[id] = boton.classList.contains("aprobado");
      guardarProgreso(progreso);
    });
  });
});

// Función para cargar progreso desde localStorage
function cargarProgreso() {
  const datos = localStorage.getItem(STORAGE_KEY);
  return datos ? JSON.parse(datos) : {};
}

// Función para guardar el progreso en localStorage
function guardarProgreso(obj) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(obj));
}
