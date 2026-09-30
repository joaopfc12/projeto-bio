const botaoMostrarMais = document.getElementById("btn-mostrar-mais");
const textoExtra = document.getElementById("texto-extra");

if (botaoMostrarMais && textoExtra) {
  botaoMostrarMais.addEventListener("click", function() {
    if (textoExtra.style.display === "none") {
      textoExtra.style.display = "inline";
      botaoMostrarMais.textContent = "Mostrar menos";
    } else {
      textoExtra.style.display = "none";
      botaoMostrarMais.textContent = "Mostrar mais";
    }
  });
}

const botaoTema = document.getElementById("btn-tema");
const iconeTema = document.getElementById("icone-tema");

if (botaoTema && iconeTema) {
  botaoTema.addEventListener("click", function() {
    document.body.classList.toggle("tema-escuro");

    if (document.body.classList.contains("tema-escuro")) {
      iconeTema.src = "img/icone-escuro.png";
    } else {
      iconeTema.src = "img/icone-claro.png";
    }
  });
}

const botaoMenu = document.getElementById("btn-menu");
const menuLista = document.querySelector("nav ul");

if (botaoMenu && menuLista) {
  botaoMenu.addEventListener("click", function() {
    menuLista.classList.toggle("menu-aberto");
  });
}

const formulario = document.getElementById("form-contato");

if (formulario) {
  const campoNome = document.getElementById("nome");
  const campoEmail = document.getElementById("email");
  const campoMensagem = document.getElementById("mensagem");
  const statusDiv = document.getElementById("mensagem-status");

  formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    const nome = campoNome.value.trim();
    const email = campoEmail.value.trim();
    const mensagem = campoMensagem.value.trim();

    if (nome === "" || email === "" || mensagem === "") {
      statusDiv.textContent = "Por favor, preencha todos os campos.";
      statusDiv.className = "erro";
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      statusDiv.textContent = "Por favor, digite um email válido.";
      statusDiv.className = "erro";
      return;
    }

    statusDiv.textContent = "Mensagem enviada com sucesso! Em breve entrarei em contato.";
    statusDiv.className = "sucesso";
    formulario.reset();
  });
}

const anoAtual = document.getElementById("ano-atual");

if (anoAtual) {
  anoAtual.textContent = new Date().getFullYear();
}
