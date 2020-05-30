

/**
 * Suma
 * @date 2020-05-23
 * @param {Number} num1
 * @param {Number} num2
 * @returns {Number}
 */
const suma = (num1, num2) => num1 + num2;

/**
 * Calcular
 * @date 2020-05-23
 * @param {Number} num1
 * @param {Number} num2
 * @param {Function} callback
 * @returns {Number}
 */
const calcular = (num1, num2, callback) => callback(num1, num2);

console.log(calcular(6, 2, suma));

/**
 * Fecha
 * @date 2020-05-23
 * @param {Function} callback
 * @returns {Date}
 */
const fecha = (callback) => {
    console.log('fecha antes del timeout: ', new Date)
    setTimeout(() => {
        const date = new Date;
        console.log('fecha dentro el timeout: ', new Date)
        callback(date)
    }, 3000);
};

/**
 * Imprimir Fecha
 * @date 2020-05-23
 * @param {Date} fechaActual
 * @returns {Date}
 */
const imprimirFecha = (fechaActual) => console.log('fecha desde la impresion: ', fechaActual);

fecha(imprimirFecha)