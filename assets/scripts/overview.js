import client from "./util/client.js";

let queryTotal = `
    {
        _allCatRecordsMeta{
            count
        }
    }
    `;

let queryPending = `
    {
        _allCatRecordsMeta(
            filter: {
                castrated: { eq: false }
            }
        ) {
            count
        }
    }
    `;

let queryConcluded = `
    {
        _allCatRecordsMeta(
            filter: {
                castrated: { eq: true }
            }
        ) {
            count
        }
    }
    `;

let queryMale = `
    {
        _allCatRecordsMeta(
            filter: {
                sex: { eq: "male" }
            }
        ) {
            count
        }
    }
    `;

let queryFemale = `
    {
        _allCatRecordsMeta(
            filter: {
                sex: { eq: "female" }
            }
        ) {
            count
        }
    }
    `;

async function renderContent() {
    let quantity = document.getElementById("valorQuantidade");
    let pendentes = document.getElementById("valorPendentes");
    let finished = document.getElementById("valorConcluídos");
    let males = document.getElementById("valorMachos");
    let females = document.getElementById("valorFemeas");

    const totalCount = await client.queryCms(queryTotal);
    const pendingCount = await client.queryCms(queryPending);
    const concludedCount = await client.queryCms(queryConcluded);
    const maleCount = await client.queryCms(queryMale);
    const femaleCount = await client.queryCms(queryFemale);

    console.log(totalCount);

    quantity.innerText = totalCount._allCatRecordsMeta.count;

    pendentes.innerText = pendingCount._allCatRecordsMeta.count;

    finished.innerText = concludedCount._allCatRecordsMeta.count;

    males.innerText = maleCount._allCatRecordsMeta.count;

    females.innerText = femaleCount._allCatRecordsMeta.count;

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

        document.getElementById("lista").innerHTML = "";

        responseJson.forEach((cat, index) => {
            console.log(cat);

            let novoGato = document.createElement("li");
            novoGato.id = `gato-${index}`; // Definindo um ID único para cada gato

            novoGato.innerHTML = `
                <img src="${
                    cat.image
                        ? cat.image.url
                        : "https://i.pinimg.com/736x/53/e8/22/53e8223abe92162e99a04fffc67dbc70.jpg"
                }" alt="alt" width="120" height="120" class="imagem">
                <div class="topicos">
                    <p>Nome: ${cat.name}</p> 
                    <p>Raça: ${cat.race}</p>
                    <p>Castrado[S/N]? ${cat.castrated ? "Sim" : "Não"}</p>
                    <div class="botoes">
                        <a class="remover" id="remover-${index}" data-id="${
                cat.id
            }">Remover</a>
                        <a class="editar" id="editar" href="/pages/management.html?id=${
                            cat.id
                        }">Editar</a>
                        <a class="visualizar" id="visualizar" href="/pages/more.html?id=${
                            cat.id
                        }">Visualizar</a>
                    </div>
                </div>
            `;
            document.getElementById("lista").appendChild(novoGato);

            // Adicionando event listener para cada botão de remover
            document
                .getElementById(`remover-${index}`)
                .addEventListener("click", async () => {
                    let confirmation = confirm("Deseja mesmo remover o registro?")

                    if (!confirmation) return;

                    document.getElementById(`remover-${index}`).innerHTML = `
                    <span class="loader loader--btn"></span>
                    `

                    try {
                        const delection = await fetch(
                            `https://ccgapi.vercel.app/api/content/delete/${cat.id}`
                        );

                        let quantity =
                            document.getElementById("valorQuantidade");
                        let pendentes =
                            document.getElementById("valorPendentes");
                        let finished =
                            document.getElementById("valorConcluídos");
                        let males = document.getElementById("valorMachos");
                        let females = document.getElementById("valorFemeas");

                        const totalCount = await client.queryCms(queryTotal);
                        const pendingCount = await client.queryCms(
                            queryPending
                        );
                        const concludedCount = await client.queryCms(
                            queryConcluded
                        );
                        const maleCount = await client.queryCms(queryMale);
                        const femaleCount = await client.queryCms(queryFemale);

                        quantity.innerText =
                            totalCount._allCatRecordsMeta.count;

                        pendentes.innerText =
                            pendingCount._allCatRecordsMeta.count;

                        finished.innerText =
                            concludedCount._allCatRecordsMeta.count;

                        males.innerText = maleCount._allCatRecordsMeta.count;

                        females.innerText =
                            femaleCount._allCatRecordsMeta.count;

                        if (delection.ok) {
                            // Removendo o elemento da página
                            document.getElementById(`gato-${index}`).remove();
                            // alert("Gato removido com sucesso da lista!");
                        } else {
                            // Exibindo um alert de erro caso a remoção não seja bem-sucedida
                            alert(
                                "Erro ao remover o registro. Por favor, tente novamente."
                            );
                        }
                    } catch (error) {
                        console.error("Erro ao remover o registro:", error);
                    }
                });
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
