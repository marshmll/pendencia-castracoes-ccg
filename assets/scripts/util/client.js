const token = "c71780a5acfd8a9c6d3ecd872652ea";

const client = {
  queryCms: async (queryString) => {
    if (!queryString) {
      throw new Error("Consulta inválida.");
    }

    try {
      const response = await fetch("https://graphql.datocms.com/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ query: queryString }),
      });

      if (!response.ok) {
        throw new Error(
          `Erro ao fazer a requisição ao servidor: ${response.status}`
        );
      }

      const responseJson = await response.json();
      // console.log(await responseJson.data);
      return responseJson.data;
    } catch (error) {
      throw new Error(`Erro ao processar a requisição: ${error.message}`);
    }
  },
};

export default client;
