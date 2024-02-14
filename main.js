/*

1. Escribe una función que devuelva el último elemento de un array. Además, debe tener
otro parámetro opcional que, en caso de pasarse, devolvería esa cantidad de números
empezando por el final. Es decir, si mi array es [1, 2, 3, 4, 5] y yo le paso el 3 como
parámetro, debe devolverme [3, 4, 5] y, si no le paso nada como parámetro, debe
devolverme solo el 5.

*/

const ReturnLastArray = (array, n = 0) => {
    if(n == 0){
        return array[array.length-1]
    } else if(n <= array.length){
        let newArray = [];
        for(let i = n-1; i<array.length; i++){
            newArray.push(array[i]);
        }
        return newArray;
    } else {
        throw new Error("Parametro introducido en n imposibilita operacion");
    }
}

module.exports.ReturnLastArray = ReturnLastArray;

/*

2. Escribe una función que, dado un array de números, devuelva una string con todos
esos números e inserte guiones entre los números pares. Es decir, dado el array [0, 2,
3, 4, 6, 7, 8], me devolvería “0 2 3 4-6 7 8”

*/

const DivideArrayWithMarks = (arrayNums) => {
    let string = ""
    for(let i=0; i < arrayNums.length-1; i++){
        (arrayNums[i] % 2 == 0 && arrayNums[i+1] % 2 == 0) ? string += (arrayNums[i].toString().concat("-")) : string += (arrayNums[i].toString().concat(" "));
    }
    string += arrayNums[arrayNums.length - 1].toString();
    return string;
}

module.exports.DivideArrayWithMarks = DivideArrayWithMarks;

/*

3. Dado un array con elementos repetidos, determina qué elemento es el más frecuente
y cuántas veces se ha repetido

*/

const RepetitiveElementsFromArray = (arrayNums) => {
    let numsNoRepetitive = [];
    for(let i = 0; i < arrayNums.length; i++){
        if(!numsNoRepetitive.includes(arrayNums[i])){
            numsNoRepetitive.push(arrayNums[i]);
        }
    }
    let repetitionNumbers = new Array(numsNoRepetitive.length);
    repetitionNumbers.fill(0, 0, repetitionNumbers.length)
    for(let i = 0; i < arrayNums.length; i++){
        for(let j = 0; j < numsNoRepetitive.length; j++){
            if(arrayNums[i] == numsNoRepetitive[j]){
                repetitionNumbers[j] += 1;
            }
        }
    }
    let majorIndexRepetition = 0;
    let majorNumberRepetition = 0;
    for(let i = 0; i < repetitionNumbers.length; i++){
        if (repetitionNumbers[i] > majorNumberRepetition){
            majorIndexRepetition = i
            majorNumberRepetition = repetitionNumbers[i]
        }
    }
    return ([numsNoRepetitive[majorIndexRepetition], repetitionNumbers[majorIndexRepetition]])
}

module.exports.RepetitiveElementsFromArray = RepetitiveElementsFromArray;

/*

4. Dada una string, crea una función que cambie todas sus mayúsculas a minúsculas y
todas sus minúsculas a mayúsculas y devuelva una nueva string.(“Hola” devolvería
“hOLA”)

*/

const MinsAMayusReverse = (string) => {
    let arrayWords = string.split(' ');

    for(word in arrayWords){
        arrayWords[word] = arrayWords[word].split('');
        for(letter in arrayWords[word]){
            (arrayWords[word][letter].match(/[a-z]/)) ? arrayWords[word][letter] = arrayWords[word][letter].toUpperCase() : arrayWords[word][letter] = arrayWords[word][letter].toLowerCase();
        }
        arrayWords[word] = arrayWords[word].join('');
    }

    return arrayWords.join(' ');
}

module.exports.MinsAMayusReverse = MinsAMayusReverse;

/*

5. Crea una función que, dado el siguiente array: [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4,
28, 14], [3, 10, 26, 7]] saque por consola cada uno de sus arrays interiores separados por
indicadores con el número de fila, es decir:
Fila 1
1
2
1
24
Fila 2
8
...

*/

const ShowListArrays = (listArrays) => {
    for(let i = 0; i < listArrays.length; i++){
        console.log(`Fila ${i+1}`);
        for(let j = 0; j < listArrays[i].length; j++){
            console.log(listArrays[i][j]);
        }
    }
}

ShowListArrays([[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]])

/*

6. Escribe una función que devuelva los años bisiestos en cierto rango de años.

*/

const GetLeapYearsInRange = (minYear, maxYear) => {
    let listLeapYears = [];
    for(let year = minYear; year <= maxYear; year++){
        if((year % 4 === 0 && year % 100 > 0) || year % 400 == 0){
            listLeapYears.push(year)
        }
    }
    return listLeapYears;
}

module.exports.GetLeapYearsInRange = GetLeapYearsInRange;

/*

7. Crea una función que, dados un array y uno de sus elementos, elimine ese elemento del
array

*/

const RemoveElementFromArray = (array, object) => {
    if(array.findIndex((element) => element == object)){
        return array.filter(item => item !== object) 
    } else {
        throw new Error("Objeto no incluido");
    }
}

module.exports.RemoveElementFromArray = RemoveElementFromArray;

/*

8. Crea una función que, dados dos arrays, devuelva un único array con ambos arrays
concatenados pero que elimine los elementos repetidos de los mismos.

*/

const FusionArrays = (array1, array2) => {
    let fusedArray = [];
    for(let i = 0; i < array1.length; i++){
        if(!fusedArray.includes(array1[i])){
            fusedArray.push(array1[i])
        }
    }
    for(let i = 0; i < array2.length; i++){
        if(!fusedArray.includes(array2[i])){
            fusedArray.push(array2[i])
        }
    }
    return fusedArray;
}

module.exports.FusionArrays = FusionArrays;

/*

9. Crea una función que determine si un array contiene cierto elemento, pasando ambos
como argumentos a la misma

*/

const ElementInsideArray = (array, element) => {
    for(let i = 0; i < array.length; i++){
        if(array[i] == element){
            return true;
        }
    }
    return false;
}

module.exports.ElementInsideArray = ElementInsideArray;

/*
10. Escribe una función que rellene un array con un determinado número de elementos y
pasa ambas cosas por parámetro. Es decir, la ejecución de rellenar(3, 4) sería [4, 4, 4]
11. Escribe una función para intercambiar las posiciones de dos elementos en un array.
12. Escribe una función que genere un array de números y pásale por parámetro el número inicial
y el largo del array. El array resultante debe ir sumando de uno en uno hasta alcanzar el largo
deseado.
13. Escribe una función que, al pasarle un array como argumento, determine qué elementos de
ese array son números y devuelva la suma de los mismos.
14. Escribe una función que determine la palabra más larga de una string
15. Crea una función que, dada una string, cuente cuántas vocales hay en la misma y devuelva el
resultado
16. Crea una función que genere una contraseña aleatoria. Debes pasar por parámetro la cantidad
de caracteres que quieres que tenga la contraseña.
17. Crea una función reloj que vaya desde las 23:58:00 hasta las 00:00:00 y saque por consola
cada segundo y minuto entre ambas.
18. Escribe una función que compruebe si un objeto tiene determinada propiedad (pasando como
parámetro el objeto y la propiedad en cuestión)
19. Escribe una función que sume todos sus argumentos, independientemente de cuántos sean
20. Escribe una función que me diga si un alumno está aprobado o no, a la cual puedo pasar
cualquier cantidad de notas como parámetro
21. Escribe una función que reciba un array de números como argumento y saque la diferencia
entre el número más alto y el más bajo del mismo. Utiliza el operador ...
22. Crea dos arrays de objetos. El primero debe contener los nombres y apellidos de por lo menos
tres personas. El segundo debe contener otros datos de esas mismas personas, como su dirección
y su número de teléfono. Utiliza una función para combinar ambos arrays y obtener un array nuevo
en que cada objeto contiene toda la información de cada persona.
23. Dado el objeto combinado del ejercicio anterior, crea una función que saque cada uno de los
objetos excluyendo la edad de la persona. Es decir, debo ver todas las propiedades de cada objeto
menos la edad. Hazlo utilizando el operador ...
24. Dado el array de nombres ["mara", "pAblo", "juan", "MARCOS"], devuelve otro en que la
primera letra de cada uno sea mayúscula y el resto minúsculas
25. Crea un array con únicamente los nombres de los siguientes objetos
let personas = [
{ nombre: "Mara", edad: 30 },
{ nombre: "Pablo", edad: 35 },
{ nombre: "Juan", edad: 26 },
{ nombre: "Marta", edad: 56 },
{ nombre: "Rodrigo", edad: 31 },
];
Además, saca un array únicamente con los nombres de los mayores de 30
26. Dado un array de números, crea una función que sume solo los pares
27. Dado un nombre completo (en string), obtén sus iniciales y sácalas también en una string
28. Saca únicamente los nombres de los estudiantes que tengan una media por encima de 9
let estudiantes = [
{ nombre: 'Mara', notas: [10, 7, 8, 8, 9] },
{ nombre: 'David', notas: [6, 2, 5, 10, 7] },
{ nombre: 'Marcos', notas: [3, 5, 2, 8, 5] },
{ nombre: 'Pablo', notas: [10, 10, 9, 8, 9] },
];

*/