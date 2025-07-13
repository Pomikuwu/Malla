// Clave única para el almacenamiento local
const STORAGE_KEY = "progresoMallaAnimacion";

document.addEventListener("DOMContentLoaded", () => {
  const botones = document.querySelectorAll("button[data-id]");
  const estadoGuardado = cargarProgreso();

  // Restaurar botones marcados como aprobados
  botones.forEach(boton => {
    const id = boton.dataset.id;
    if (estadoGuardado[id]) {
      boton.classList.add("aprobado");
    }

    // Al hacer clic: marcar/desmarcar y guardar estado
    boton.addEventListener("click", () => {
      boton.classList.toggle("aprobado");
      const aprobado = boton.classList.contains("aprobado");
      estadoGuardado[id] = aprobado;
      guardarProgreso(estadoGuardado);
    });
  });
});

// Carga el objeto desde localStorage
function cargarProgreso() {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : {};
}

// Guarda el objeto en localStorage
function guardarProgreso(estado) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(estado));
}

