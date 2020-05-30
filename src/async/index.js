const somethingAsync = (estado) => {
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
    try {
        const resultado = await somethingAsync(true);
        console.log(resultado)
    } catch (error) {
        console.log(error);
    }
}

console.log('antes')
doSomethingAsync()
console.log('despues')