// Seleciona todos os elementos 'li'
let cardNum = document.querySelectorAll("li"); //pode ser #ID, .class ou TAG - essa linha representa pegar todos os 3 itens dentro da lista [0,1,2]

// Inicializa o índice em zero
let index = 0;

// Define uma função para mostrar o cartão
function slider(num) {
  index = index + num; // Atualiza o índice adicionando 'num' ao valor atual pode ser +1 ou -1 depende do botão que eu clico

  // Se o índice for maior ou igual ao número de elementos 'li', significa que já está na ultima figura então ele retorna para a posição 0 que é a primeira figura
  if (index >= cardNum.length) {
    index = 0;
  }

  // Se o índice for menor que zero, define-o como o último elemento 'li'

  if (index < 0) {
    index = cardNum.length - 1;
  }

  // Exibe o cartão atual na tela, rolando até ele
  cardNum[index].scrollIntoView({ behavior: "smooth" });

}


// define a função para rolar automaticamente os itens a cada 5 segundos
function autoScroll() {
    setInterval(function () {
        slider(1);
    }, 5000); // chama a função `show` com o valor 1 para rolar para o próximo item
  }

  // chama a função `autoScroll` para iniciar a rolagem automática
autoScroll();