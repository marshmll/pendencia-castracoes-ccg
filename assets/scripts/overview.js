let quantity = document.getElementById("valorVariavel");
let pendentes = 0;
let finished = 0;
let males = 0;
let females = 0;
let valor = 0;



document.getElementById('add').addEventListener('click', function(event) {
  event.preventDefault();
  
  let novoGato = document.createElement('li');
  let nome = prompt("Informe o nome do gato: ");
  let raca = prompt("Informe a raça do gato: ");
  let castrado = prompt("Castrado? ");

  novoGato.innerHTML = `
  <img src="/assets/images/gato1.jpg" alt="foto" width="120" height="120" class="imagem">
  <div class="topicos">
    <p>Nome: ${nome}</p> 
    <p>Raça: ${raca}</p>
    <p>Castrado? ${castrado}</p>
    <button class="remove">Remover</button>
  </div>
`;
  novoGato.querySelector('.remove').addEventListener('click', function() {
  novoGato.remove();
  });

  document.getElementById('lista').appendChild(novoGato);
  // valor += 1;
  // quantity.innerHTML = valor;
});