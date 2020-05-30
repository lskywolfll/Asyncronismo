const somethingWillHappen = (estado) => {
    return new Promise((resolve, reject) => {
        if (estado) {
            resolve('Hey!')
        } else {
            reject('Jamas me ejecute!')
        }
    })
};

const somethingWillHappen2 = (estado = true) => {
    return new Promise((resolve, reject) => {
        if (estado) {
            setTimeout(() => {
                resolve('OYe me ejecute')
            }, 2000);
        } else {
            const error = new Error('No pude perdoname 😿')
            reject(error)
        }
    })
};

// somethingWillHappen(false)
//     .then(resp => {
//         console.log(resp)
//     })
//     .catch(error => {
//         console.log(error)
//     })

// somethingWillHappen2(false)
//     .then(resp => console.log(resp))
//     .catch(error => console.error(error))

// Ejecutar muchas promesas sin las consultas a una api
// 1. usar una array(cajita) donde pondremos todas nuestras promesas 
// 2- controlar como una promesa normal con el then y catch
// 3- cuando falla una jamas podremos ver si las demas se ejecutaron correctamente :( asi que tener cuidado
Promise.all([somethingWillHappen(true), somethingWillHappen2()])
    .then(resp => {
        console.log('Lista de resultados: ', resp);
    })
    .catch(error => {
        console.error(error);
    })