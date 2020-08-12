
const async = require('async');

const datos = [1, 2, 3, 4];

async.eachSeries(datos, (valor, callback) => {
    console.log(valor);
    if (valor == 2) {
        return callback();
    } else {
        return callback(new Error('No se puede'));
    }
}, (err) => {
    console.log('#1 final call', err);
});