
//OBJECTS

//Object.entries() esto se hace para convertir un objeto en una constante y en esta versión, tambien se puede poner al final del array u objeto, en el último elemento una coma ' , ' aunque no vayamos a escribir nada pq era un error muy común olvidarnos de la coma

const data = {
    fronted: 'Oscar',
    backend: 'Isabel',
    design: 'Anna'
}

const entries = Object.entries(data);
console.log(entries);

//con la funcion ' entries.lenght ' podemos saber de forma rápida los elements de clases que hay un objeto o array

//Object.value() devuelve un array con los valores de cada propiedad del objeto enviado como argumento.

const dataa = {
    fronted: 'Oscar',
    backend: 'Isabel',
    design: 'Anna'
}

const values = Object.values(dataa);
console.log(values);

//Pad 
//El método padStart completa un string con otro string en el inicio hasta tener un total de caracteres especificado.
//El método padEnd completa un string con otro string en el final hasta tener un total de caracteres especificado.

const string = 'hello';
console.log(string.padStart(7, 'hi'));
console.log(string.padEnd(12, '------'));

//ASYNC Y AWAIT sirven para manejar asincronismos.
//La funcion asíncona se crea mediante la palabra reservada async y retorna una promesa

//metemos una promesa antes de nada
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(()=> resolve ('Hello World'), 3000)
            :  reject (new Error ('Test Error'))
    })
}

//Await significa que espera hasta que una promesa sea resuelta y solo funcionan dentro de una función asíncrona. Los bloques try / catch sirven para manejar si la promesa ha sido resuelta o rechazada.

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
}

helloAsync();

//ejecución de forma correcta de async y await para manejar los errores

const anotherFunction = async () => {
    try {
        const hello = await helloAsync();
        console.log (hello);
    } catch (error) {
        console.log(error);
    }
};