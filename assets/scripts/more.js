import client from "./util/client.js";

const catId = window.location.href.split("?id=")[1];
console.log(catId);

async function setCatContent() {
    let query = `
    {
      allCatRecords(
        filter: {
          id: { eq: "${catId}" }
        }
      ) {
        id
        image {
          url
        }
        name
        weight
        race
        color
        sex
        diseases
        castrated
        behavior
        historic
        attachments {
          url
        }
        _status
        _firstPublishedAt
      }
    
      _allCatRecordsMeta {
        count
      }
    }`;

    let data = await client.queryCms(query);

    console.log(data);

    let imageUrl = data.allCatRecords[0].image
        ? data.allCatRecords[0].image.url
        : "https://i.pinimg.com/736x/53/e8/22/53e8223abe92162e99a04fffc67dbc70.jpg";
    let name = data.allCatRecords[0].name;
    let weight = data.allCatRecords[0].weight;
    let race = data.allCatRecords[0].race;
    let color = data.allCatRecords[0].color;
    let sex = data.allCatRecords[0].sex == "female" ? "Fêmea" : "Macho";
    let disease = data.allCatRecords[0].diseases
        ? data.allCatRecords[0].diseases
        : "Não há";
    let historic = data.allCatRecords[0].historic
        ? data.allCatRecords[0].historic
        : "Não há";
    let behavior = data.allCatRecords[0].behavior
        ? data.allCatRecords[0].behavior
        : "Não há";
    let attachments = data.allCatRecords[0].attachments;

    document.getElementById(
        "cat-image"
    ).style.backgroundImage = `url(${imageUrl})`;
    document.getElementById("cat-name").append(name);
    document.getElementById("cat-weight").append(weight);
    document.getElementById("cat-race").append(race);
    document.getElementById("cat-color").append(color);
    document.getElementById("cat-sex").append(sex);
    document.getElementById("cat-disease").append(disease);
    document.getElementById("cat-historic").append(historic);
    document.getElementById("cat-behavior").append(behavior);

    let boxes = document.querySelectorAll(".attachments__box");

    let i = 0;
    attachments.forEach((att) => {
        let link = document.createElement("a");
        link.href = att.url;
        link.innerText = "Ver anexo";
        boxes[i].append(link);

        i++;
    });

    document.querySelector(
        ".buttons__button--edit"
    ).href = `/pages/management.html?id=${catId}`;

    document
        .querySelector(".buttons__button--remove")
        .addEventListener("click", async (e) => {
            e.preventDefault();

            const confirmation = confirm("Deseja mesmo deletar este registro?");

            if (!confirmation) return;

            document.querySelector(".buttons__button--remove").innerHTML = `
                <span class="loader"></span>
            `;

            try {
                const response = await fetch(
                    `https://ccgapi.vercel.app/api/content/delete/${catId}`
                );

                if (!response.ok) {
                    throw new Error(
                        `Erro ao fazer a requisição ao servidor: ${response.status}`
                    );
                }

                window.location.pathname = "/pages/overview.html";

                const responseJson = await response.json();
                console.log(responseJson);
            } catch (e) {
                throw new Error(e);
            }
        });
}

setCatContent();
