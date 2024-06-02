let quantity = document.getElementById("valorVariavel");
let pendentes = 0;
let finished = 0;
let males = 0;
let females = 0;
let valor = 0;


<<<<<<< Updated upstream

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
    <p>Castrado[S/N]? ${castrado}</p>
    <button class="remove">Remover</button>
  </div>
`;
  novoGato.querySelector('.remove').addEventListener('click', function() {
  novoGato.remove();
  });
=======
let id_count = 0

let quantidade = 0;
let sobrando = 0;
let concluidos = 0;
let machos = 0;
let femeas = 0;

async function renderContent() {
    try {
        const response = await fetch("http://ccgapi.vercel.app/api/content/all");

        if (!response.ok) {
            throw new Error(`Erro ao fazer a requisição ao servidor: ${response.status}`);
        }
>>>>>>> Stashed changes

  document.getElementById('lista').appendChild(novoGato);
  // valor += 1;
  // quantity.innerHTML = valor;
});

<<<<<<< Updated upstream
=======
        responseJson.forEach((cat) => {
            console.log(cat);
            id_count++;
            let novoGato = document.createElement("li");
            
            novoGato.id = "gato_" + id_count;
            novoGato.innerHTML = `
				<img src="${
                    cat.image ? cat.image.url : "https://i.pinimg.com/736x/53/e8/22/53e8223abe92162e99a04fffc67dbc70.jpg"
                }" alt="alt" width="120" height="120" class="imagem">
				<div class="topicos">
					<p>Nome: ${cat.name}</p> 
					<p>Raça: ${cat.race}</p>
					<p>Castrado[S/N]? ${cat.castrated ? "Sim" : "Não"}</p>
					<div class="botoes">
						<a class="remove" id="remover">Remover</a>
						<a class="remove" id="editar" href="/pages/management.html?id=${cat.id}">Editar</a>
						<a class="remove" id="visualizar" href="/pages/more.html?id=${cat.id}">Visualizar</a>
					</div>
				</div>
	  		`;

            document.getElementById("lista").appendChild(novoGato);

        });
    } catch (error) {
        console.error("Erro ao renderizar o conteúdo:", error);
    }
}

renderContent();

// async function renderContent() {
//     try {
//         const response = await fetch("http://ccgapi.vercel.app/api/content/all");

//         if (!response.ok) {
//             throw new Error(`Erro ao fazer a requisição ao servidor: ${response.status}`);
//         }

//         const responseJson = await response.json();

//         responseJson.forEach((cat) => {
//             id_count++; // Incrementa o contador

//             let novoGato = document.createElement("li");
//             novoGato.id = "gato_" + id_count; // Define o ID do novo elemento
//             novoGato.innerHTML = `
//                 <img src="${
//                     cat.image ? cat.image.url : "https://i.pinimg.com/736x/53/e8/22/53e8223abe92162e99a04fffc67dbc70.jpg"
//                 }" alt="alt" width="120" height="120" class="imagem">
//                 <div class="topicos">
//                     <p>Nome: ${cat.name}</p> 
//                     <p>Raça: ${cat.race}</p>
//                     <p>Castrado[S/N]? ${cat.castrated ? "Sim" : "Não"}</p>
//                     <div class="botoes">
//                         <a class="remove" id="remover_${id_count}">Remover</a>
//                         <a class="remove" id="editar" href="/pages/management.html?id=${cat.id}">Editar</a>
//                         <a class="remove" id="visualizar" href="/pages/more.html?id=${cat.id}">Visualizar</a>
//                     </div>
//                 </div>
//             `;
//             document.getElementById("lista").appendChild(novoGato);

//             // Adiciona event listener para o botão "Remover"
//             document.getElementById(`remover_${id_count}`).addEventListener('click', async () => {
//                 try {
//                     const deletion = await fetch(`https://ccgapi.vercel.app/content/delete/${cat.id}`);
//                     if (deletion.ok) {
//                         document.getElementById(`gato_${id_count}`).remove(); // Remove o elemento da página
//                     } else {
//                         alert("Erro ao deletar o registro do servidor.");
//                     }
//                 } catch (error) {
//                     console.error("Erro ao remover o registro:", error);
//                 }
//             });
//         });
//     } catch (error) {
//         console.error("Erro ao renderizar o conteúdo:", error);
//     }
// }

// renderContent();
>>>>>>> Stashed changes
