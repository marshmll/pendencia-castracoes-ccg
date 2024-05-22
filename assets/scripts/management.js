import client from "./util/client.js";

async function renderManagement() {
  let query = `
  {
    allCatRecords {
      id
      name
      _status
      _firstPublishedAt
    }

    _allCatRecordsMeta {
      count
    }
  }`;

  let data = await client.queryCms(query);

  console.log(data);
}

renderManagement();