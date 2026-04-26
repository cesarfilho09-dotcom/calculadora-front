function pegarValores() {
  return {
    n1: Number(document.getElementById("n1").value),
    n2: Number(document.getElementById("n2").value)
  };
}

function mostrarResultado(valor) {
  const div = document.getElementById("saida");
  div.innerHTML = `<p class="resultado">Resultado: ${valor}</p>`;
}

function somar() {
  const { n1, n2 } = pegarValores();
  mostrarResultado(n1 + n2);
}

function subtrair() {
  const { n1, n2 } = pegarValores();
  mostrarResultado(n1 - n2);
}

function multiplicar() {
  const { n1, n2 } = pegarValores();
  mostrarResultado(n1 * n2);
}

function dividir() {
  const { n1, n2 } = pegarValores();
  if (n2 === 0) {
    mostrarResultado("Erro: divisão por zero");
    return;
  }
  mostrarResultado(n1 / n2);
}