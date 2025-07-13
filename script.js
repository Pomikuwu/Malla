document.addEventListener("DOMContentLoaded", () => {
  const botones = document.querySelectorAll("button");
  botones.forEach(boton => {
    boton.addEventListener("click", () => {
      boton.classList.toggle("aprobado");
    });
  });
});

