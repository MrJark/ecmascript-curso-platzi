
//Operador de reposo

//esto nos permite extraer del objeto una sola variable que nos interese y las demás las clasificamos como all precedido de 3 puntos
const obj = {
    name: 'oscar',
    age: 23,
    country: 'MX'
};

let { country, ...all } = obj;
console.log(all);

//Propagación

const obj = {
    name: 'Oscar',
    age: 32
}
//los 3 puntitos y el nombre lo que hace es unir ambos objetos si tener que declararlos en el mismo
const obj1 = {
    ...obj,
    country: 'MX'
}

console.log(obj1);

//Finally

//estas funcionan con promesas
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? resolve('Hello World')
            : reject (new Error ('Test Error'))
    });
};

helloWorld ()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(()=> console.log('Finalizó'))

//Agrupaciones de bloques de regex

const regexData = /([0-9]{4}-(0-9){2}-[0-9]{2})/
const match = regexData.exec('2018-04-20');
const year = match [1]
const month = match [2]
const day = match [3]

console.log(year, month, day);