// Mudando o link ativo da página

const links = document.querySelectorAll(".header-menu a");

function linkAtivo(link) {
  if (location.href.includes(link.href)) {
    console.log(link);
    link.classList.add("ativo");
  }
}
links.forEach(linkAtivo);

// Ativando itens da página de orçamento

const parametros = new URLSearchParams(location.search);

function ativarProdutos(parametro) {
  const item = document.getElementById(parametro);
  if (item) {
    item.checked = true;
  } else {
    console.log("Item não existente");
  }
}
parametros.forEach(ativarProdutos);

// Perguntas frequentes

const perguntas = document.querySelectorAll(".perguntas button");

function mostrarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  resposta.classList.toggle("pergunta-ativa");
  const ativa = resposta.classList.contains("pergunta-ativa");
  console.log(ativa);
  pergunta.setAttribute("aria-expanded", ativa);
}

function ativarPergunas(pergunta) {
  pergunta.addEventListener("click", mostrarPergunta);
}
perguntas.forEach(ativarPergunas);
