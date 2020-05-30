const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

/**
 *
 *
 * @param {String} url
 * @param {Function} callback
 */
const fetchData = (url) => {
    const xhttp = new XMLHttpRequest()

    return new Promise((resolve, reject) => {
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
                    resolve(JSON.parse(xhttp.responseText))
                } else {
                    const error = new Error(`Error: ${url}`)
                    reject(error)
                }
            }
        }

        // Envia la peticion
        xhttp.send();
    });
}

module.exports = {
    fetchData
}