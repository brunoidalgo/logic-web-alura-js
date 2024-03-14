let numeroSecreto = gerarNumeroAleatorio();
console.log(numeroSecreto);

function verificarChute () {
  let chute = document.querySelector('input').value;
  if (numeroSecreto == chute) {
    exibirTextoNaTela('p', `Você acertou o número era: ${numeroSecreto}`)
  } else {
    exibirTextoNaTela('p', `Você errou o número era: ${numeroSecreto}`)
  }
}

function novoJogo(){
  exibirTextoNaTela('p', 'Escolha um número entre 1 e 10:');
}

function exibirTextoNaTela(tag,texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do Número Secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10:');

function gerarNumeroAleatorio() {
  return parseInt(Math.random() * 10 + 1);
}