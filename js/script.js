const links = document.querySelectorAll(".header-menu a");

function linkAtivo(link) {
  if (location.href.includes(link.href)) {
    console.log(link);
    link.classList.add("ativo");
  }
}
links.forEach(linkAtivo);
