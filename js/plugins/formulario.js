const formulario = document.querySelector("form");

function formularioEnviado(info) {
  if (info.ok) {
    formulario.innerHTML =
      ":D";
  } else {
    formulario.innerHTML =
      "<p class='font-1-m' style='grid-column: 1/-1; padding: 1rem; border-radius: 5px; background: #000;'><span style='color: #fff;'>Não fiz a parte do PHP ainda, pode enviar direto para</span><span class='font-2-m cor-0'> conantorreswf@gmail.com</span></p>";
  }
}

function enviarFormulario(event) {
  event.preventDefault();
  const botao = document.querySelector("form button");
  botao.disabled = true;
  botao.innerText = "Enviando...";
  const data = new FormData(formulario);
  fetch("./envio.php", {
    method: "POST",
    body: data,
  }).then(formularioEnviado);
}

formulario.addEventListener("submit", enviarFormulario);
