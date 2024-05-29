import client from "./util/client.js";

const catId = window.location.href.split("?id=")[1];
console.log(catId);

const catForm = document.querySelector("#cat-form");
const catImage = document.querySelector(".main-fieldset__image");
const catNameField = document.getElementById("cat_name");
const catWeightField = document.getElementById("cat_weight");
const catRaceField = document.getElementById("cat_race");
const catColorField = document.getElementById("cat_color");
const catSexField = document.getElementById("cat_sex");
const catDiseasesField = document.getElementById("cat_diseases");
const catCastratedYesField = document.getElementById("cat_castrated_yes");
const catCastratedNoField = document.getElementById("cat_castrated_no");
const catHistoricField = document.getElementById("cat_historic");
const catBehaviorField = document.getElementById("cat_behavior");

function setManagementFormData(data) {
    console.log(data);

    let catImageUrl = data.allCatRecords[0].image.url;
    let catName = data.allCatRecords[0].name;
    let catWeight = data.allCatRecords[0].weight;
    let catRace = data.allCatRecords[0].race;
    let catColor = data.allCatRecords[0].color;
    let catSex = data.allCatRecords[0].sex;
    let catDiseases = data.allCatRecords[0].diseases;
    let catCastrated = data.allCatRecords[0].castrated;
    let catHistoric = data.allCatRecords[0].historic;
    let catBehavior = data.allCatRecords[0].behavior;

    catImage.style.backgroundImage = `url(${catImageUrl})`;
    catNameField.value = catName;
    catWeightField.value = catWeight;
    catRaceField.value = catRace;
    catColorField.value = catColor;
    catSexField.value = catSex;
    catDiseasesField.value = catDiseases;

    if (catCastrated) {
        catCastratedYesField.checked = true;
    } else {
        catCastratedNoField.checked = true;
    }

    catHistoricField.value = catHistoric;
    catBehaviorField.value = catBehavior;
}

async function renderManagement() {
    let query = "";

    if (catId != "new") {
        query = `
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
        setManagementFormData(data);

        catForm.addEventListener("submit", async (e) => {
            e.preventDefault();

            const data = {
                id: catId,
                name: catNameField.value,
                weight: catWeightField.value,
                race: catRaceField.value,
                color: catColorField.value,
                sex: catSexField.value,
                diseases: catDiseasesField.value,
                castrated: catCastratedYesField.checked,
                historic: catHistoricField.value,
                attachments: [],
                behavior: catBehaviorField.value,
            };

            try {
                const response = await fetch(
                    `http://ccgapi.vercel.app/api/content/update/${encodeURI(
                        JSON.stringify(data)
                    )}`
                );

                if (!response.ok) {
                    throw new Error(
                        `Erro ao fazer a requisição ao servidor: ${response.status}`
                    );
                }

                console.log(body);
                window.location.pathname = "/pages/overview.html";

                const responseJson = await response.json();
                console.log(responseJson);
            } catch (e) {
                throw new Error(e);
            }
        });
    } else {
        catForm.addEventListener("submit", async (e) => {
            e.preventDefault();
            const body = {
                name: catNameField.value,
                weight: catWeightField.value,
                race: catRaceField.value,
                color: catColorField.value,
                sex: catSexField.value,
                diseases: catDiseasesField.value,
                castrated: catCastratedYesField.checked,
                historic: catHistoricField.value,
                attachments: [],
                behavior: catBehaviorField.value,
            };

            try {
                const response = await fetch(
                    `http://ccgapi.vercel.app/api/content/create/${encodeURI(
                        JSON.stringify(body)
                    )}`
                );

                if (!response.ok) {
                    throw new Error(
                        `Erro ao fazer a requisição ao servidor: ${response.status}`
                    );
                }

                console.log(body);
                window.location.pathname = "/pages/overview.html";

                const responseJson = await response.json();
                console.log(responseJson);
            } catch (e) {
                throw new Error(e);
            }
        });
    }
}

renderManagement();
