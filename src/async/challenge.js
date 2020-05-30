const { fetchData } = require('../utils/fetchData');
const API = 'https://rickandmortyapi.com/api/character/'

const anotherFunction = async (url_api) => {
    try {
        const { results, info: { count } } = await fetchData(url_api);
        const { origin: { url }, name } = await fetchData(`${url_api}${results[0].id}`)
        const { dimension } = await fetchData(url)

        console.log(`
            Cantidad de personajes: ${count}
            Personaje: ${name}
            Dimension: ${dimension}
        `)
    } catch (error) {
        console.error(error);
    }
};

anotherFunction(API)