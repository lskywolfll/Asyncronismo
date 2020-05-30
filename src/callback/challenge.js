// const fetch = require('isomorphic-fetch');
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'https://rickandmortyapi.com/api/character/'

/**
 *
 *
 * @param {String} url
 * @param {Function} callback
 */
const fethData = (url, callback) => {
    const xhttp = new XMLHttpRequest()

    /**
     * Crea una peticion
     * @date 2020-05-30
     * @param {String} 'GET' -> Tipo de peticion
     * @param {String} url -> A quien hacer la peticion
     * @param {Boolean} true -> Si utilizar asyncronismo
     * @returns {any}
     */
    xhttp.open('GET', url, true);

    // Crontola los estados cuando la peticion  se haga
    xhttp.onreadystatechange = (e) => {
        if (xhttp.readyState === 4) {
            if (xhttp.status === 200) {
                callback(null, JSON.parse(xhttp.responseText));
            } else {
                const error = new Error(`Error: ${url}`)
                return callback(error, null);
            }
        }
    }

    // Envia la peticion
    xhttp.send();
}

fethData(API, (error1, data1) => {
    MostrarEror(error1);

    fethData(API + data1.results[0].id, (error2, data2) => {
        MostrarEror(error2);

        fethData(data2.origin.url, (error3, data3) => {
            MostrarEror(error3);
            const { info: { count } } = data1;
            const { name } = data2;
            const { dimension } = data3

            console.log(`
                
                Cantidad de personajes: ${count}

                Nombre del personaje: ${name}

                Dimension: ${dimension}
            `)
        })
    })
})

function MostrarEror(error) {
    if (error) {
        return console.error(error);
    }
}