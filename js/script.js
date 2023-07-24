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
