// =============================================
// PORTFÓLIO - BRENO AMORIM
// Arquivo de JavaScript
// =============================================


// ---------- 1. MENU NO CELULAR ----------
const botaoMenu = document.getElementById("botao-menu");
const menu = document.getElementById("menu");

// abre e fecha o menu ao clicar no botão ☰
botaoMenu.addEventListener("click", function () {
  menu.classList.toggle("aberto");
});

// fecha o menu quando a pessoa clica em algum link
const linksMenu = document.querySelectorAll(".menu a");

for (let i = 0; i < linksMenu.length; i++) {
  linksMenu[i].addEventListener("click", function () {
    menu.classList.remove("aberto");
  });
}


// ---------- 2. TEMA CLARO / ESCURO ----------
const botaoTema = document.getElementById("botao-tema");

botaoTema.addEventListener("click", function () {
  // coloca ou tira a classe "tema-claro" do body (as cores estão no CSS)
  document.body.classList.toggle("tema-claro");

  // troca o ícone do botão
  if (document.body.classList.contains("tema-claro")) {
    botaoTema.textContent = "☾";
  } else {
    botaoTema.textContent = "☀";
  }
});


// ---------- 3. ANO ATUAL NO RODAPÉ ----------
document.getElementById("ano").textContent = new Date().getFullYear();
