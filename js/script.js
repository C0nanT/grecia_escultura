// Mudando o link ativo da página

const links = document.querySelectorAll(".header-menu a");

function linkAtivo(link) {
  if (location.href.includes(link.href)) {
    console.log(link);
    link.classList.add("ativo");
  }
}
links.forEach(linkAtivo);

// Mudando o link ativo da página - FIM
///////////////////////////////////////////////////////////////////////////////////////////////////////////
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

// Ativando itens da página de orçamento - FIM
///////////////////////////////////////////////////////////////////////////////////////////////////////////
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

// Perguntas frequentes - FIM
///////////////////////////////////////////////////////////////////////////////////////////////////////////
// Galeria de esculturas - Troca

const galeria = document.querySelectorAll(".escultura-imagens img");
const galeriaContainer = document.querySelector(".escultura-imagens");

function trocarImagem(event) {
  const img = event.currentTarget;
  const mediaCheck = matchMedia("(min-width: 1000px)").matches;
  if (mediaCheck) {
    galeriaContainer.prepend(img);
  }
}

function eventosGaleria(imagem) {
  imagem.addEventListener("click", trocarImagem);
}

galeria.forEach(eventosGaleria);

// Galeria de esculturas - Troca - FIM
///////////////////////////////////////////////////////////////////////////////////////////////////////////
// Plugin de Animação

if (window.SimpleAnime) {
  new SimpleAnime();
}
