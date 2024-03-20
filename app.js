let listaNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function verificarChute () {
  let chute = document.querySelector('input').value;
  if (numeroSecreto == chute) {
    if(tentativas < 2) {
      exibirTextoNaTela('p', `Você acertou o número secreto: ${numeroSecreto} com ${tentativas} tentativa.`);
      document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
      exibirTextoNaTela('p', `Você acertou o número secreto: ${numeroSecreto} com ${tentativas} tentativas.`);
      document.getElementById('reiniciar').removeAttribute('disabled');
    } 
    
  } else if (numeroSecreto > chute) {
    exibirTextoNaTela('p', `Você errou o número secreto era maior! Essa é a sua ${tentativas} tentativa:`);
    tentativas++;
  } else {  
    exibirTextoNaTela('p', `Você errou o número secreto era menor! Essa é a sua ${tentativas} tentativa:`);
    tentativas++;
  }
  limparCampo();
}

function novoJogo(){
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  tentativas = 1;
  exibirMensagemInicial()
  document.getElementById('reiniciar').setAttribute('disabled', true);
}


function limparCampo() {
  chute = document.querySelector('input');
  chute.value = '';
}

function exibirTextoNaTela(tag,texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  responsiveVoice.speak(texto, 'Brazilian Portuguese Female',{rate: 1.2});
}

function exibirMensagemInicial(){
  exibirTextoNaTela('h1', 'Jogo do Número Secreto');
  exibirTextoNaTela('p', 'Escolha um número entre 1 e 10:');
}

exibirMensagemInicial()

function gerarNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
  let quantidadeElementosLista = listaNumerosSorteados.length;
  if (quantidadeElementosLista == numeroLimite) {
    listaNumerosSorteados = [];
  }
  if (listaNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();
  } else {
    listaNumerosSorteados.push(numeroEscolhido);
    console.log(listaNumerosSorteados)
    return numeroEscolhido;
  }
}