const somethingAsync = (estado = true) => {
    return new Promise((resolve, reject) => {
        if (estado) {
            setTimeout(() => {
                resolve('Do Something async')
            }, 3000);
        } else {
            reject(new Error('Oh no algo salio mal'))
        }
    });
}

const doSomethingAsync = async () => {
    // Para tomar los errores que pueda ocurrir en nuestra asyncronia nosotros debemos usar el try-catch para poder controlar los errores 
    // Dentro del try estara el flujo correcto y luego del catch todo el flujo cuando algo salio mal
    try {
        const resultado = await somethingAsync();
        console.log(resultado)
    } catch (error) {
        console.log(error);
    }
}

console.log('antes')
doSomethingAsync()
console.log('despues')