//1.- Crear variable de nombre arrayVacio cuyo valor sea un array vacío

const arrayVacio = [];

//2.- Crear variable de nombre arrayNumeros declarada con un array de números del 0 al 9 (0, 1, 2...)
const arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


//3.- Crear variable de nombre arrayNumerosPares declarada con un array con los números pares del 0 al 9 (considerando al 0 par)

const arrayNumerosPares = [0, 2, 4, 6, 8];

//4.- Crear variable de nombre arrayBidimensional declarada con valor array [[0, 1, 2], ['a', 'b', 'c']]

const arrayBidimensional = [[0, 1, 2], ['a', 'b', 'c']];

//5.- Crea la función suma que acepte como argumento dos números y devuelva el resultado de su suma

function suma(a, b) {
    return a + b;
}

//6.- Crea la función potenciacion que acepte como argumento dos números y devuelva el resultado de elevar el primero(a) al segundo(b) (a^b)

function potenciacion(a, b) {
    if (b == 0) { return 1 };
    let result = a;
    for (i = 1; i < b; i++) {
        console.log('iteracion' + i);
        result *= a;
        console.log(result);
    }
    return result;
}

//7.- Crea la función separarPalabras que acepte como argumento un string y devuelva un array de palabras 'hola mundo' => [hola, mundo]

function separarPalabras(string) {
    const arr = string.split(" ");
    return arr;

}

//8.- Crea la función repetirString que acepte como argumento un string y un número y devuelva un string que sea el resultado de concatenar el primer string el número dado de veces

function repetirString(string, number) {
    let result = "";
    for (let i = 0; i < number; i++) {
        result += string;
    }
    return result;

}





//9.- Crea la función esPrimo que acepte como argumento un número y devuelva true si es primo y false si no lo es

function esPrimo(num) {
    let restos = [];

    for (let i = 0; i <= num; i++) {

        let resto = num % i;
        restos.push(resto);
    }
    //remainders other than first and last

    restos = restos.slice(2);
    restos = restos.reverse();
    restos = restos.slice(1);
    console.log(restos);
    if (restos.includes(0)) {
        return false
    } else {
        return true
    }
}


// si la diferencia entre el array de restos y el array filtrado es superior a 2 no es un número primo



//10.- Crear la función ordenarArray que acepta como argumento un array de números y devuelva un array ordenado de menor a mayor
//copiada de int
function ordenarArray(array) {
    array.sort((a, b) => a - b);
    return array;
}


//11.- Crear la función obtenerPares que acepta como argumento un array de números y devuelva un array con los elementos pares

function obtenerPares(array) {
    const pares = [];
    for (i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            pares.push(array[i]);
        }
    }
    return pares;
}


//12.- Crear la función pintarArray que acepte como argumento un array y devuelva una cadena de texto Array entrada: [0, 1, 2] String salida: '[0, 1, 2]'

function pintarArray(array) {
    let result = '[' + array.join(", ") + ']';
    return result;
}



//13.- Crear la función arrayMapi que acepte como argumento un Array y una función y devuelva un array en el que se haya aplicado la función a cada elemento del array

function arrayMapi(array, fx) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(fx(array[i]));
    }
    return result;

}


//14.- Crear la función eliminarDuplicados que acepte como argumento un array y devuelva un array en el que se hayan eliminado los duplicados

function eliminarDuplicados(array) {
    const unique = [];
    for (i = 0; i < array.length; i++) {

        if (!unique.includes(array[i])) {
            unique.push(array[i]);
        }
    }
    return unique;

}

//15.- Crear variable de nombre arrayNumerosNeg declarada con un array de números del 0 al -9 (0, -1, -2...)

const arrayNumerosNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9];

//16.- Crear variable de nombre holaMundo declarada con valor array con las palabras 'Hola' y 'Mundo'
const holaMundo = ['Hola', 'Mundo'];

//17.- Crear variable de nombre loGuardoTodo declarada con valor array con valores 'hola', 'que', 23, 42.33 y 'tal'

const loGuardoTodo = ['hola', 'que', 23, 42.33, 'tal'];

//18.- Crear variable de nombre arrayDeArrays declarada con valor array: [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']]
const arrayDeArrays = [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']];


//19.- Crea la función multiplicacion que acepte como argumento dos números y devuelva el resultado de su multiplicación

function multiplicacion(a, b) { return a * b; }


//20.- Crea la función division que acepte como argumento dos números y devuelva el resultado de su division

function division(a, b) { return a / b; }

//21.- Crea la función esPar que acepte como argumento un número y devuelva true si es par y false si es impar

function esPar(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

//22.- Crea el array arrayFunciones que tenga como valor las funciones: suma, resta y multiplicación (todas aceptan 2 números como argumento y devuelve el resultado de su operación)

function suma(a, b) { return a + b }
function resta(a, b) { return a - b }
function multiplicacion(a, b) { return a * b }

const arrayFunciones = [suma, resta, multiplicacion];


//23.- Crear la función ordenarArray2 que acepta como argumento un array de números y devuelva un array ordenado de mayor a menor

function compare(a, b) {
    return a - b;
}

function ordenarArray2(arr) {
    let orderedArray = arr.sort(compare)
    return orderedArray;

}

/*function ordenarArray2(array) {
    const orderedArray = [];

    for (i = 0; i < array.length; i++) {

        for (j = 0; j < array.length; j++) {
            let esMayor = [];
            if (array[i] >= array[j]) { esMayor.push("mayor") }
            else { esMayor.push("menor") }

        }
        if (!esMayor.includes("menor")) {
            orderedArray.push(array[i]);
        }

    }
    console.log(orderedArray);
}
*/

function ordenar(arr) {
    const arrayOrdenado = [];//resultado ordenado
    for (i = 0; i < arr.length; i++) {//seleccionar numeros uno a uno
        let comparado = arr[i];//numero a comparar
        for (j = 0; j < arr.length; j++) {// comparación con todos los numeros 
            let comparacion = [];
            if (comparado <= arr[j]) {
                //si el numero comparado es menor o igual
                comparación.push("menor");
            }
            else { comparacion.push("mayor"); }
            if (comparacion.includes("menor")) {
            } else { arrayOrdenado.push(comparado); }


        }
    }
}

//24.- Crear la función obtenerImpares que acepta como argumento un array de números y devuelva un array con los elementos impares


function obtenerImpares(array) {
    const arrayImpares = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            arrayImpares.push(array[i]);
        }
    }
    return arrayImpares;
}

//25.- Crear la función sumarArray que acepte como argumento un array numérico y devuelva la suma de los números en el array Array: [1, 2, 3] resultado: 6

function sumarArray(array) {
    const addFunc = (a, b) => a + b;
    const result = array.reduce(addFunc);
    return result;
}

//26.- Crear la función multiplicarArray que acepte como argumento un array numérico y devuelva la multiplicación de los números en el array Array: [2, 3, 4] resultado: 24

function multiplicarArray(array) {
    const multFunc = (a, b) => a * b;
    const result = array.reduce(multFunc);
    return result;
}
