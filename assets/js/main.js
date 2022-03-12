function relogio() {
  //função para pegar o tempo - recebe os segundos, cria a data e retorna a data
  function getTimeFromSeconds(segundos) {
    const data = new Date(segundos * 1000); // converte em MS
    return data.toLocaleTimeString("pt-BR", {
      hour12: false,
      timeZone: "GMT", // aparece 00:00:00 nas horas
    });
  }

  //capturando relógio e botões
  const relogio = document.querySelector(".relogio");
  const iniciar = document.querySelector(".iniciar");
  const pausar = document.querySelector(".pausar");
  const zerar = document.querySelector(".zerar");
  let segundos = 0;
  let timer;

  //função p/ iniciar o relógio
  function iniciaRelogio() {
    timer = setInterval(function () {
      segundos++;
      relogio.innerHTML = getTimeFromSeconds(segundos);
    }, 1000);
  }

  //capturando evento de click = iniciar, pausar e zerar
  iniciar.addEventListener("click", function (event) {
    relogio.classList.remove("pausado"); // remove a classe que deixa a letra vermelha
    clearInterval(timer); // impede que o botao iniciar multiplique a contagem dos segundos
    iniciaRelogio();
  });
  pausar.addEventListener("click", function (event) {
    clearInterval(timer);
    relogio.classList.add("pausado"); // adiciona a classe que deixa a letra vermelha
  });
  zerar.addEventListener("click", function (event) {
    clearInterval(timer);
    relogio.innerHTML = "00:00:00";
    segundos = 0;
  });
}
relogio();

/*

======= LÓGICA USADA =======
1º)
    Dentro da função foi feito um conversor, onde formata a hora em "pt-BR", formato hour12:false, e timeZone GMT
    Foi criada a função getTimeFromSeconds, onde foi informado a "const data" recebendo new Date(seconds * 1000) para transformar os milisegundos em SEGUNDOS

2º)
    No escopo global, foram criadas variáveis que recebem os eventos de click: iniciar, pausar e zerar
    Foram criadas também duas variáveis vazias, segundos = 0 e timer.

3º
    Foram criadas EventListeners para capturar o evento de click das variáveis criadas e executar funções anônimas em cada uma delas

4º
    Foi criada a função iniciaRelogio, que contém a variável timer que recebe o setInterval e dentro dele uma função anônima.
    Nessa função anônima, temos o incremento em segundos (segundos++).
    Temos também a atualização do relógio no navegador com relogio.innerHTML = chamada da função getTimeFromSeconds(segundos). O timer será executado de 1000 em 1000 milisegundos (s)

5º
    INICIAR: 
        1- foi adicionado um classList.remove('pausado') => serve para remover a classe pausado que possui um CSS que deixa a letra vermelha.
        2- foi adicionado um clearInterval(timer) para evitar multiplos cliques no botão iniciar
        3- foi adicionado a chamada para a função iniciaRelógio 
    PAUSAR:
        1- foi adicionado um classList.add('pausado') => serve para adicionar a classe 'pausado' que possui um CSS que deixa a letra vermelha
        2- foi adicionado um clearInterval(timer) para congelar o intervalo do timer na função iniciaRelogio
    ZERAR:
        1- Foi adicionado um clearInterval(timer) para parar o timer
        2- Mudou o HTML do relógio para 00:00:00
        3- zerou os segundos para iniciar do zero
*/
