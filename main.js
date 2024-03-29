/*

1. Escribe una función que devuelva el último elemento de un array. Además, debe tener
otro parámetro opcional que, en caso de pasarse, devolvería esa cantidad de números
empezando por el final. Es decir, si mi array es [1, 2, 3, 4, 5] y yo le paso el 3 como
parámetro, debe devolverme [3, 4, 5] y, si no le paso nada como parámetro, debe
devolverme solo el 5.

*/

const { array } = require("yargs");

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

    for(let word in arrayWords){
        arrayWords[word] = arrayWords[word].split('');
        for(let letter in arrayWords[word]){
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
    return (array.findIndex((element) => element == object)) ? array.filter(item => item !== object) : new Error("Objeto no incluido");
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

*/

const FillListWithElementsNTimes = (length, content) => {
    return new Array(length).fill(content);
}

module.exports.FillListWithElementsNTimes = FillListWithElementsNTimes;

/*

11. Escribe una función para intercambiar las posiciones de dos elementos en un array.

*/

const SwapElementsInArray = (array, element1, element2) => {
    let pos1 = array.indexOf(element1);
    let pos2 = array.indexOf(element2);
    let ele1 = array[pos1];
    array[pos1] = array[pos2];
    array[pos2] = ele1;
    return array;
}

module.exports.SwapElementsInArray = SwapElementsInArray;

/*

12. Escribe una función que genere un array de números y pásale por parámetro el número inicial
y el largo del array. El array resultante debe ir sumando de uno en uno hasta alcanzar el largo
deseado.

*/

const ArrayFromNToLengthN = (initial, length) => {
    let resArray = [initial];
    for(let i = 1; i < length; i++){
        resArray.push(initial+i);
    }
    return resArray;
}

module.exports.ArrayFromNToLengthN = ArrayFromNToLengthN;

/*

13. Escribe una función que, al pasarle un array como argumento, determine qué elementos de
ese array son números y devuelva la suma de los mismos.

*/

const CountingNumsInsideArray = (array) => {
    let counterNums = 0;
    for(let i = 0; i < array.length; i++){
        if(!isNaN(array[i])){
            counterNums++;
        }
    }
    return counterNums;
}

module.exports.CountingNumsInsideArray = CountingNumsInsideArray;

/*

14. Escribe una función que determine la palabra más larga de una string

*/

const GetLongestWord = (string) => {
    let arrayWords = string.split(' ');
    let longestWord;
    let maxSizeWord = 0;
    for(let word in arrayWords){
        if(arrayWords[word].length > maxSizeWord){
            maxSizeWord = arrayWords[word].length;
            longestWord = arrayWords[word];
        }
    }
    return longestWord;
}

module.exports.GetLongestWord = GetLongestWord;

/*

15. Crea una función que, dada una string, cuente cuántas vocales hay en la misma y devuelva el
resultado

*/

const CountVowelsInString = (string) => {
    let arrayWords = string.split(' ');
    const vowels = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u'];
    let vowelsCounter = 0;
    for(let word in arrayWords){
        let letters = arrayWords[word].split('');
        for(let letter in letters){
            if(vowels.includes(letters[letter])){
                vowelsCounter++;
            }
        }
    }
    return vowelsCounter;
}

module.exports.CountVowelsInString = CountVowelsInString;

/*

16. Crea una función que genere una contraseña aleatoria. Debes pasar por parámetro la cantidad
de caracteres que quieres que tenga la contraseña.

*/

const NewRandomPassword = (length) => {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/\&€#@';
    //const regex = /[a-zA-Z0-9]/; // Regex to match alphanumeric characters

    let result = '';
    for (let i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * characters.length);
        var randomChar = characters.charAt(randomIndex);
        result += randomChar;
    }
    return result;
}

console.log(NewRandomPassword(15))

/*

17. Crea una función reloj que vaya desde las 23:58:00 hasta las 00:00:00 y saque por consola
cada segundo y minuto entre ambas.

*/

const TwoMinutesTimeToTwelve = () => {
    let timeClock = new Date();
    timeClock.setHours(23);
    timeClock.setMinutes(58);
    timeClock.setSeconds(0);
    console.log(timeClock.getHours().toString() + ":" + timeClock.getMinutes().toString() + ":" + timeClock.getSeconds().toString());

    let seconds = 0;
    const StartClockGoing = () => {
        if(seconds < 120){
            setTimeout(() => {
                timeClock.setSeconds(timeClock.getSeconds() + 1);
                console.log(timeClock.getHours().toString() + ":" + timeClock.getMinutes().toString() + ":" + timeClock.getSeconds().toString());
                StartClockGoing();
            }, 1000);
            seconds++;
        }
    }

    StartClockGoing();
}

//TwoMinutesTimeToTwelve();

/*

18. Escribe una función que compruebe si un objeto tiene determinada propiedad (pasando como
parámetro el objeto y la propiedad en cuestión)

*/

const CheckObjectProperty = (object, property) => {
    return (Object.keys(object).includes(property)) ? true : false;
}

module.exports.CheckObjectProperty = CheckObjectProperty;

/*

19. Escribe una función que sume todos sus argumentos, independientemente de cuántos sean

*/

const SumAllParameters = (...parameters) => {
    return parameters.reduce((total, current) => total + current);
}

module.exports.SumAllParameters = SumAllParameters;

/*

20. Escribe una función que me diga si un alumno está aprobado o no, a la cual puedo pasar
cualquier cantidad de notas como parámetro

*/

const CheckNotesFromStudent = (...marks) => {
    let totalMarks = marks.length
    let sumMarks = marks.reduce((total, current) => total + current);
    return (sumMarks / totalMarks > 5) ? true : false;
}

module.exports.CheckNotesFromStudent = CheckNotesFromStudent;

/*

21. Escribe una función que reciba un array de números como argumento y saque la diferencia
entre el número más alto y el más bajo del mismo. Utiliza el operador ...

*/

const DifferenceGreaterLowerNumsArray = (...array) => {
    if (array.length === 0) {
        return 0;
    }
      
    const maxNumber = Math.max(...array);
    const minNumber = Math.min(...array);
    
    return maxNumber - minNumber;
}

module.exports.DifferenceGreaterLowerNumsArray = DifferenceGreaterLowerNumsArray;

/*

22. Crea dos arrays de objetos. El primero debe contener los nombres y apellidos de por lo menos
tres personas. El segundo debe contener otros datos de esas mismas personas, como su dirección
y su número de teléfono. Utiliza una función para combinar ambos arrays y obtener un array nuevo
en que cada objeto contiene toda la información de cada persona.

*/

const MixArraysDataShared = (array1, array2) => {
    let arrayPersonas = [];
    for(let i = 0; i < array1.length; i++){
        arrayPersonas.push(Object.assign({}, array1[i], array2[i]))
    }    
    return arrayPersonas;
}

//console.log(MixArraysDataShared([{nombre: "Carlos", apellidos: "Ibañez", edad: 23}, {nombre: "Marina", apellidos: "Escriva", edad: 26}, {nombre: "Sergio", apellidos: "Torres", edad: 35}],[{ciudad: "Valencia", telefono: "987654321"}, {ciudad: "Valencia", telefono: "987654321"}, {ciudad: "Valencia", telefono: "987654321"}]));
module.exports.MixArraysDataShared = MixArraysDataShared;

/*

23. Dado el objeto combinado del ejercicio anterior, crea una función que saque cada uno de los
objetos excluyendo la edad de la persona. Es decir, debo ver todas las propiedades de cada objeto
menos la edad. Hazlo utilizando el operador ...

*/

const RemoveAgeFromPersona = (arrayObjects) => {
    let arrayNewObjects = [];
    for(let i = 0; i<arrayObjects.length; i++){
        const { edad, ...nuevoObjeto } = arrayObjects[i];
        arrayNewObjects.push(nuevoObjeto);
    }
    return arrayNewObjects;
}

//console.log(RemoveAgeFromPersona([{nombre: 'Sergio',apellidos: 'Torres',edad: 35,ciudad: 'Valencia',telefono: '987654321'}]));
module.exports.RemoveAgeFromPersona = RemoveAgeFromPersona;

/*

24. Dado el array de nombres ["mara", "pAblo", "juan", "MARCOS"], devuelve otro en que la
primera letra de cada uno sea mayúscula y el resto minúsculas

*/

const SetNamesProperly = (arrayNames) => {
    let NewArrayNames = [];
    for(let i = 0; i < arrayNames.length; i++){
        let nameSplitted = arrayNames[i].split('');
        for(let j = 0; j < nameSplitted.length; j++){
            (j == 0) ? nameSplitted[j] = nameSplitted[j].toUpperCase() : nameSplitted[j] = nameSplitted[j].toLowerCase();
        }
        NewArrayNames.push(nameSplitted.join(''));
    }
    return NewArrayNames;
}

module.exports.SetNamesProperly = SetNamesProperly;

/*

25. Crea un array con únicamente los nombres de los siguientes objetos
let personas = [{ nombre: "Mara", edad: 30 },{ nombre: "Pablo", edad: 35 },{ nombre: "Juan", edad: 26 },{ nombre: "Marta", edad: 56 },{ nombre: "Rodrigo", edad: 31 }];
Además, saca un array únicamente con los nombres de los mayores de 30

*/

const GetNamesAndNamesByAge = (arrayPeople, age = 0) => {
    let arrayPeopleNames = [];
    let arrayPeopleNamesByAge = [];
    for(let i = 0; i < arrayPeople.length; i++){
        const { nombre, edad, ...nuevoObjeto } = arrayPeople[i];
        arrayPeopleNames.push(nombre);
        if(age != 0 && edad > age){
            arrayPeopleNamesByAge.push(nombre);
        }
    }
    return (age == 0) ? arrayPeopleNames : arrayPeopleNamesByAge;
}

module.exports.GetNamesAndNamesByAge = GetNamesAndNamesByAge;

/*

26. Dado un array de números, crea una función que sume solo los pares

*/

const SumOddsFromArray = (arrayNums) => {
    let sumatory = 0;
    for(let i = 0; i < arrayNums.length; i++){
        if(arrayNums[i] % 2 == 0){
            sumatory += arrayNums[i];
        }
    }
    return sumatory;
}

module.exports.SumOddsFromArray = SumOddsFromArray;

/*

27. Dado un nombre completo (en string), obtén sus iniciales y sácalas también en una string

*/

const GetInitialsOfName = (name) => {
    let arrayName = name.toUpperCase().split(' ');
    let initials = [];
    for (let partName of arrayName){
        initials.push(partName.slice(0,1));
    }
    return initials.join('.');
}

module.exports.GetInitialsOfName = GetInitialsOfName;

/*

28. Saca únicamente los nombres de los estudiantes que tengan una media por encima de 9
let estudiantes = [{ nombre: 'Mara', notas: [10, 7, 8, 8, 9] },{ nombre: 'David', notas: [6, 2, 5, 10, 7] },{ nombre: 'Marcos', notas: [3, 5, 2, 8, 5] },{ nombre: 'Pablo', notas: [10, 10, 9, 8, 9] }];

*/

const GetBrilliantStudents = (arrayStudents) => {
    let arrayBrilliantStudents = [];
    for(let i = 0; i<arrayStudents.length; i++){
        let sumMarks = 0;
        const {nombre, notas} = arrayStudents[i];
        for(let j = 0; j < notas.length; j++){
            sumMarks += notas[j];
        }
        if((sumMarks / notas.length) > 9){
            arrayBrilliantStudents.push(nombre);
        }
    }
    return arrayBrilliantStudents;
}

module.exports.GetBrilliantStudents = GetBrilliantStudents;