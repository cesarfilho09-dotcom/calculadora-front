const btn = document.getElementById("btn");

// ouvir clique
btn.addEventListener("click", () => {

  // pegar valores
  const n1 = Number(document.getElementById("n1").value);
  const n2 = Number(document.getElementById("n2").value);

  // fazer conta
  const resultado = n1 + n2;

  // criar elemento
  const p = document.createElement("p");

  // escrever resultado
  p.textContent = "Resultado: " + resultado;

  // adicionar classe
  p.classList.add("resultado");

  const saida = document.getElementById("saida");

  // limpar antes
  saida.innerHTML = "";

  // adicionar no HTML
  saida.appendChild(p);

  // remover classe depois
  setTimeout(() => {
    p.classList.remove("resultado");
  }, 2000);
});