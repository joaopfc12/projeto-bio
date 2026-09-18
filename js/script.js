const botaoMostrarMais = document.getElementById("btn-mostrar-mais");
const textoExtra = document.getElementById("texto-extra");

botaoMostrarMais.addEventListener("click", function() {
  if (textoExtra.style.display === "none") {
    textoExtra.style.display = "inline";
    botaoMostrarMais.textContent = "Mostrar menos";
  } else {
    textoExtra.style.display = "none";
    botaoMostrarMais.textContent = "Mostrar mais";
  }
});

const botaoTema = document.getElementById("btn-tema");

botaoTema.addEventListener("click", function() {
  document.body.classList.toggle("tema-escuro");
});

const botaoMenu = document.getElementById("btn-menu");
const menuLista = document.querySelector("nav ul");

botaoMenu.addEventListener("click", function() {
  menuLista.classList.toggle("menu-aberto");
});
