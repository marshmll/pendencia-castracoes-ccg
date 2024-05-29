import client from "./util/client.js";

let quantity = document.getElementById("valorQuantidade");
let pendentes = document.getElementById("valorPendentes");
let finished = document.getElementById("valorConcluídos");
let males = document.getElementById("valorMachos");
let females = document.getElementById("valorFemeas");

let quantidade = 0;
let sobrando = 0;
let concluidos = 0;
let machos = 0;
let femeas = 0;

document.getElementById("Cadastrar").addEventListener("click", function (event) {
    event.preventDefault();

    let novoGato = document.createElement("li");
    let nome = prompt("Informe o nome do gato: ");
    let raca = prompt("Informe a raça do gato: ");
    let castrado = prompt("Castrado? ");

    novoGato.innerHTML = `
    <img src="/assets/images/gato1.jpg" alt="foto" width="120" height="120" class="imagem">
    <div class="topicos">
      <p>Nome: ${nome}</p> 
      <p>Raça: ${raca}</p>
      <p>Castrado[S/N]? ${castrado}</p>
      <div class="botoes">
        <button class="remove" id="remover">Remover</button>
        <button class="remove" id="editar">Editar</button>
        <button class="remove" id="visualizar">Visualizar</button>
      </div>
    </div>
  `;

    quantidade += 1;
    sobrando += 1;
    concluidos += 1;
    machos += 1;
    femeas += 1;

    novoGato.querySelector(".remove").addEventListener("click", function () {
        novoGato.remove();
        quantidade -= 1;
        sobrando -= 1;
        concluidos -= 1;
        machos -= 1;
        femeas -= 1;

        quantity.textContent = quantidade;
        pendentes.textContent = sobrando;
        finished.textContent = concluidos;
        males.textContent = machos;
        females.textContent = femeas;
    });

    document.getElementById("lista").appendChild(novoGato);

    quantity.textContent = quantidade;
    pendentes.textContent = sobrando;
    finished.textContent = concluidos;
    males.textContent = machos;
    females.textContent = femeas;
});
