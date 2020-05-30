const { fetchData } = require('../utils/fetchData');
const API = 'https://rickandmortyapi.com/api/character/'

fetchData(API)
    .then(data => {
        const { info: { count }, results } = data;
        console.log(count);
        return fetchData(`${API}${results[0].id}`)
    })
    // Esta es el resolve para la segunda promesa
    .then(data => {
        const { name, origin: { url } } = data;
        console.log(name)
        return fetchData(url)
    })
    // La tercera
    .then(data => {
        const { dimension } = data;
        console.log(dimension)
    })
    .catch(error => console.error(error))