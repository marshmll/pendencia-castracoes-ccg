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

async function renderContent() {
    try {
        const response = await fetch(
            "https://ccgapi.vercel.app/api/content/all"
        );

        if (!response.ok) {
            throw new Error(
                `Erro ao fazer a requisição ao servidor: ${response.status}`
            );
        }

        const responseJson = await response.json();
        console.log(responseJson);

        responseJson.forEach((cat, index) => {
            console.log(cat);

            let novoGato = document.createElement("li");
            novoGato.id = `gato-${index}`; // Definindo um ID único para cada gato

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
    } catch (e) {
        throw new Error(e);
    }
}

renderContent();


// import client from "./util/client.js";

// let quantity = document.getElementById("valorQuantidade");
// let pendentes = document.getElementById("valorPendentes");
// let finished = document.getElementById("valorConcluídos");
// let males = document.getElementById("valorMachos");
// let females = document.getElementById("valorFemeas");

// let quantidade = 0;
// let sobrando = 0;
// let concluidos = 0;
// let machos = 0;
// let femeas = 0;

// async function renderContent() {
//     try {
//         const response = await fetch(
//             "https://ccgapi.vercel.app/api/content/all"
//         );

//         if (!response.ok) {
//             throw new Error(
//                 `Erro ao fazer a requisição ao servidor: ${response.status}`
//             );
//         }

//         const responseJson = await response.json();
//         console.log(responseJson);

//         responseJson.forEach((cat) => {
//             console.log(cat);

//             let novoGato = document.createElement("li");

//             novoGato.innerHTML = `
// 				<img src="${
//                     cat.image ? cat.image.url : "https://i.pinimg.com/736x/53/e8/22/53e8223abe92162e99a04fffc67dbc70.jpg"
//                 }" alt="alt" width="120" height="120" class="imagem">
// 				<div class="topicos">
// 					<p>Nome: ${cat.name}</p> 
// 					<p>Raça: ${cat.race}</p>
// 					<p>Castrado[S/N]? ${cat.castrated ? "Sim" : "Não"}</p>
// 					<div class="botoes">
// 						<a class="remove" id="remover">Remover</a>
// 						<a class="remove" id="editar" href="/pages/management.html?id=${cat.id}">Editar</a>
// 						<a class="remove" id="visualizar" href="/pages/more.html?id=${cat.id}">Visualizar</a>
// 					</div>
// 				</div>
// 	  		`;

//             document.getElementById("lista").appendChild(novoGato);
//         });
//     } catch (e) {
//         throw new Error(e);
//     }
// }

// renderContent();