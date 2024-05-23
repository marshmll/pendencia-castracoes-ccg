import client from "./util/client.js";

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
}

async function renderManagement() {
  let query = `
  {
    allCatRecords {
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
}

renderManagement();