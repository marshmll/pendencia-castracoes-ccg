let quantity = document.getElementById("valorVariavel");
let pendentes = 0;
let finished = 0;
let males = 0;
let females = 0;
let valor = 0;



document.getElementById('add').addEventListener('click', function() {
  event.preventDefault();
  let novoGato = document.createElement('li');
  
  // Adiciona texto ao novo item
  novoGato.textContent = prompt("Informe o nome do gato:")
  document.getElementById('lista').appendChild(novoGato);
  valor += 1;
  quantity.innerHTML = valor;
});