const client = {
    queryCms: async (queryString) => {
        if (!queryString) {
            throw new Error("Consulta inválida.");
        }

        let queryURI = encodeURI(queryString);

        try {
            const response = await fetch(
                `https://ccgapi.vercel.app/api/content/${queryURI}`
            );

            if (!response.ok) {
                throw new Error(
                    `Erro ao fazer a requisição ao servidor: ${response.status}`
                );
            }

            const responseJson = await response.json();
            return responseJson.data;
        } catch (error) {
            throw new Error(`Erro ao processar a requisição: ${error.message}`);
        }
    },
};

export default client;
