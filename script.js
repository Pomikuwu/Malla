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
