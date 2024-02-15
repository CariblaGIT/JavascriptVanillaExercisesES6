const functionsES6 = require("./main.js");

describe('Devolver ultimo array o subArray - ReturnLastArray', () => {
    describe('Bloque 1 - Arrays comunes - Ultima cifra', () => {
        test('Test 1.1', () => {
            const result = functionsES6.ReturnLastArray([1, 2, 3, 4, 6, 8, 9]);
            expect(result).toBe(9);
        })
        test('Test 1.2', () => {
            const result = functionsES6.ReturnLastArray([0, 0, -3, 5, 4, 999999999999999, 26]);
            expect(result).toBe(26);
        })
        test('Test 1.3', () => {
            const result = functionsES6.ReturnLastArray([-4, 21, -123456789, 8642, 65432, -111111]);
            expect(result).toBe(-111111);
        })
    })

    describe('Bloque 2 - Arrays comunes - Subarrays', () => {
        test('Test 2.1', () => {
            const result = functionsES6.ReturnLastArray([1, 2, 3, 4, 5, 6, 7], 3);
            expect(result).toStrictEqual([ 3, 4, 5, 6, 7 ]);
        })
        test('Test 2.2', () => {
            const result = functionsES6.ReturnLastArray([1234, 54321, 985648, -654321, 456, -123456, 2345.678], 6);
            expect(result).toStrictEqual([ -123456, 2345.678 ]);
        })
        test('Test 2.3', () => {
            const result = functionsES6.ReturnLastArray([1, 1, 1, 1, 1, 0], 0);
            expect(result).toBe(0);
        })
    })

    describe('Bloque 3 - Casos excepcionales', () => {
        test('Test 3.1', () => {
            const result = functionsES6.ReturnLastArray([]);
            expect(result).toStrictEqual();
        })
        test('Test 3.2', () => {
            expect(() => functionsES6.ReturnLastArray([],1)).toThrow();
        })
        
    })
})

describe('Guiones numeros pares - DivideArrayWithMarks', () => {
    describe('Bloque 1 - Arrays comunes', () => {
        test('Test 1.1', () => {
            const result = functionsES6.DivideArrayWithMarks([1, 2, 3, 4, 6, 8, 9]);
            expect(result).toBe("1 2 3 4-6-8 9");
        })
        test('Test 1.2', () => {
            const result = functionsES6.DivideArrayWithMarks([1, 2, 3, 4, 5, 6, 7]);
            expect(result).toBe("1 2 3 4 5 6 7");
        })
        test('Test 1.3', () => {
            const result = functionsES6.DivideArrayWithMarks([2, 4, 6, 8, 10, 12, 14]);
            expect(result).toBe("2-4-6-8-10-12-14");
        })
    })

    describe('Bloque 2 - Arrays no comunes', () => {
        test('Test 2.1', () => {
            const result = functionsES6.DivideArrayWithMarks([1, -2, 0, -4, 60600, 8, 19]);
            expect(result).toBe("1 -2-0--4-60600-8 19");
        })
        test('Test 2.2', () => {
            const result = functionsES6.DivideArrayWithMarks([-1, -2, -3, -4, -5, -6, -7]);
            expect(result).toBe("-1 -2 -3 -4 -5 -6 -7");
        })
        test('Test 2.3', () => {
            const result = functionsES6.DivideArrayWithMarks([-2, -4, -6, -8, -10, -12, -14]);
            expect(result).toBe("-2--4--6--8--10--12--14");
        })
    })
})

describe('Mayor repeticion en array - RepetitiveElementsFromArray', () => {
    describe('Bloque 1 - Arrays comunes', () => {
        test('Test 1.1', () => {
            const result = functionsES6.RepetitiveElementsFromArray([1, 1, 1, 1, 1, 2, 1]);
            expect(result).toStrictEqual([1, 6]);
        })
        test('Test 1.2', () => {
            const result = functionsES6.RepetitiveElementsFromArray([1, -1, -1, -1, 0, 9999999999, 5]);
            expect(result).toStrictEqual([-1, 3]);
        })
        test('Test 1.3', () => {
            const result = functionsES6.RepetitiveElementsFromArray(["Patata", "Patata", "Patata", "Patata", "kiwi", "kiwi", 1234567890]);
            expect(result).toStrictEqual(["Patata", 4]);
        })
    })
    describe('Bloque 2 - Arrays no comunes', () => {
        test('Test 2.1', () => {
            const result = functionsES6.RepetitiveElementsFromArray([ , , 3, 2]);
            expect(result).toStrictEqual([undefined, 2]);
        })
    })
})

describe('Cambio mayusculas a minusculas y viceversa - MinsAMayusReverse', () => {
    describe('Bloque 1 - Strings comunes', () => {
        test('Test 1.1', () => {
            const result = functionsES6.MinsAMayusReverse("PaPiTo");
            expect(result).toBe("pApItO");
        })
        test('Test 1.2', () => {
            const result = functionsES6.MinsAMayusReverse("GeeksHubs es una Organizacion GENIAL");
            expect(result).toBe("gEEKShUBS ES UNA oRGANIZACION genial");
        })
        test('Test 1.3', () => {
            const result = functionsES6.MinsAMayusReverse("AsDfGhJkLZxCvBnM");
            expect(result).toBe("aSdFgHjKlzXcVbNm");
        })
    })
})

describe('Testing Leap Years in Range - GetLeapYearsInRange', () => {
    describe('Bloque 1 - Ranges of years well', () => {
        test('Test 1.1', () => {
            const result = functionsES6.GetLeapYearsInRange(2021,2023);
            expect(result).toStrictEqual([]);
        })
        test('Test 1.2', () => {
            const result = functionsES6.GetLeapYearsInRange(2000, 2024);
            expect(result).toStrictEqual([2000, 2004, 2008, 2012, 2016, 2020, 2024]);
        })
        test('Test 1.3', () => {
            const result = functionsES6.GetLeapYearsInRange(1995, 1997);
            expect(result).toStrictEqual([1996]);
        })
    })
})

describe('Testing Removing from Array - RemoveElementFromArray', () => {
    describe('Bloque 1 - Objects that belongs to array ONCE', () => {
        test('Test 1.1', () => {
            const result = functionsES6.RemoveElementFromArray([0, 1, 2, 3, 4, 5, 6, 7], 4);
            expect(result).toStrictEqual([0, 1, 2, 3, 5, 6, 7]);
        })
        test('Test 1.2', () => {
            const result = functionsES6.RemoveElementFromArray(["Dog", "Cat", "Rabbit", "Turtle", "Fish"], "Rabbit");
            expect(result).toStrictEqual(["Dog", "Cat", "Turtle", "Fish"]);
        })
        test('Test 1.3', () => {
            const result = functionsES6.RemoveElementFromArray([0.11, 2, "Bug", "Donkey", 3, -78, "T-Rex"], -78);
            expect(result).toStrictEqual([0.11, 2, "Bug", "Donkey", 3, "T-Rex"]);
        })
    })
})

describe('Testing Fusing 2 arrays - FusionArrays', () => {
    describe('Bloque 1 - Simple arrays', () => {
        test('Test 1.1', () => {
            const result = functionsES6.FusionArrays([0, 1, 2],[3, 4, 5]);
            expect(result).toStrictEqual([0, 1, 2, 3, 4, 5]);
        })
        test('Test 1.2', () => {
            const result = functionsES6.FusionArrays(["Dog", "Cat", "Rabbit"], ["Rabbit", "Turtle", "Fish"]);
            expect(result).toStrictEqual(["Dog", "Cat", "Rabbit", "Turtle", "Fish"]);
        })
        test('Test 1.3', () => {
            const result = functionsES6.FusionArrays([0, 0, 0, 0, 1], [1, 1, 1, 1, 1, 1, 1, 0]);
            expect(result).toStrictEqual([0, 1]);
        })
    })
})

describe('Testing Element inside an array - ElementInsideArray', () => {
    describe('Bloque 1 - Simple arrays', () => {
        test('Test 1.1', () => {
            const result = functionsES6.ElementInsideArray([0, 1, 2, 3, 4, 5], 4);
            expect(result).toBe(true);
        })
        test('Test 1.2', () => {
            const result = functionsES6.ElementInsideArray(["Dog", "Cat", "Rabbit"], "Fish");
            expect(result).toBe(false);
        })
        test('Test 1.3', () => {
            const result = functionsES6.ElementInsideArray([0, 1.23456789, "Cat", [1, 2, 3], "Mammut"], 1.23456789);
            expect(result).toBe(true);
        })
    })
})

describe('Testing array N length filled with content - FillListWithElementsNTimes', () => {
    test('Test 1', () => {
        const result = functionsES6.FillListWithElementsNTimes(2, 4);
        expect(result).toStrictEqual([4, 4]);
    })
    test('Test 2', () => {
        const result = functionsES6.FillListWithElementsNTimes(1, "Fish");
        expect(result).toStrictEqual(["Fish"]);
    })
    test('Test 3', () => {
        const result = functionsES6.FillListWithElementsNTimes(0, 8.1234567);
        expect(result).toStrictEqual([ ]);
    })
})

describe('Testing Swapping elements inside array - SwapElementsInArray', () => {
    describe('Bloque 1 - Simple arrays', () => {
        test('Test 1.1', () => {
            const result = functionsES6.SwapElementsInArray([0, 1, 2, 3, 4, 5], 4, 5);
            expect(result).toStrictEqual([0, 1, 2, 3, 5, 4]);
        })
        test('Test 1.2', () => {
            const result = functionsES6.SwapElementsInArray(["Dog", "Cat", "Rabbit", "Fish", "Parrot"], "Dog", "Parrot");
            expect(result).toStrictEqual([ "Parrot", "Cat", "Rabbit", "Fish", "Dog"]);
        })
        test('Test 1.3', () => {
            const result = functionsES6.SwapElementsInArray([, , 2, , , , 4], 2, 4);
            expect(result).toStrictEqual([, , 4, , , , 2]);
        })
    })
})

describe('Testing Array creation from i to length+i - ArrayFromNToLengthN', () => {
    test('Test 1', () => {
        const result = functionsES6.ArrayFromNToLengthN(1, 5);
        expect(result).toStrictEqual([1, 2, 3, 4, 5]);
    })
    test('Test 2', () => {
        const result = functionsES6.ArrayFromNToLengthN(-1, 3);
        expect(result).toStrictEqual([-1, 0, 1]);
    })
    test('Test 3', () => {
        const result = functionsES6.ArrayFromNToLengthN(999999, 4);
        expect(result).toStrictEqual([999999, 1000000, 1000001, 1000002]);
    })
})

describe('Testing Counting nums inside array - CountingNumsInsideArray', () => {
    test('Test 1', () => {
        const result = functionsES6.CountingNumsInsideArray([1, 2, 3, 4, 0, -2]);
        expect(result).toBe(6);
    })
    test('Test 2', () => {
        const result = functionsES6.CountingNumsInsideArray(["Cat", 0.12345, -1234567898765432123456787654321, [], ]);
        expect(result).toBe(3);
    })
    test('Test 3', () => {
        const result = functionsES6.CountingNumsInsideArray([]);
        expect(result).toBe(0);
    })
})

describe('Testing Vowels in String - CountVowelsInString', () => {
    test('Test 1', () => {
        const result = functionsES6.CountVowelsInString("GeeksHubs esta siendo una experiencia enriquecedora");
        expect(result).toBe(23);
    })
    test('Test 2', () => {
        const result = functionsES6.CountVowelsInString("AEIOUaeiouAeIoUaEiOu");
        expect(result).toBe(20);
    })
    test('Test 3', () => {
        const result = functionsES6.CountVowelsInString(" ");
        expect(result).toBe(0);
    })
})

describe('Testing Properties into Objects - CheckObjectProperty', () => {
    test('Test 1', () => {
        const result = functionsES6.CheckObjectProperty({nombre: "Carlos", edad: 23, ciudad: "Valencia"}, "edad");
        expect(result).toBe(true);
    })
    test('Test 2', () => {
        const result = functionsES6.CheckObjectProperty({nombre: "Carlos", edad: 23, ciudad: "Valencia"}, "calle");
        expect(result).toBe(false);
    })
    test('Test 3', () => {
        const result = functionsES6.CheckObjectProperty({nombre: "Carlos", edad: 23, ciudad: "Valencia", vehiculos: {coche: "FordFiesta"}}, "coche");
        expect(result).toBe(false);
    })
})

describe('Testing Sum all params in function (no matter size) - SumAllParameters', () => {
    test('Test 1', () => {
        const result = functionsES6.SumAllParameters(1, 2, 3, 4, 5, 6, 7);
        expect(result).toStrictEqual(28);
    })
    test('Test 2', () => {
        const result = functionsES6.SumAllParameters("Hola ", "buenos ", "dias ", "a ", "todos.");
        expect(result).toStrictEqual("Hola buenos dias a todos.");
    })
    test('Test 3', () => {
        const result = functionsES6.SumAllParameters(1, " dia ", "mas ", "con ", 50, " tontos ", "cerca.");
        expect(result).toStrictEqual("1 dia mas con 50 tontos cerca.");
    })
})

describe('Testing Student passing with n marks - CheckNotesFromStudent', () => {
    test('Test 1', () => {
        const result = functionsES6.CheckNotesFromStudent(10, 10, 9, 9, 8, 7, 7);
        expect(result).toBe(true);
    })
    test('Test 2', () => {
        const result = functionsES6.CheckNotesFromStudent(1, 2, 3, 4, 5, 6, 7);
        expect(result).toBe(false);
    })
    test('Test 3', () => {
        const result = functionsES6.CheckNotesFromStudent(0);
        expect(result).toBe(false);
    })
})

describe('Testing Difference between Max and Min from array - DifferenceGreaterLowerNumsArray', () => {
    test('Test 1', () => {
        const result = functionsES6.DifferenceGreaterLowerNumsArray(10, 10, 9, 9, 8, 7, 7);
        expect(result).toBe(3);
    })
    test('Test 2', () => {
        const result = functionsES6.DifferenceGreaterLowerNumsArray(1, 2, 3, 4, 5, 6, 7);
        expect(result).toBe(6);
    })
    test('Test 3', () => {
        const result = functionsES6.DifferenceGreaterLowerNumsArray(0);
        expect(result).toBe(0);
    })
})

describe('Testing Names written correctly - SetNamesProperly', () => {
    test('Test 1', () => {
        const result = functionsES6.SetNamesProperly(["ALEJANDRO", "agustin"]);
        expect(result).toStrictEqual(["Alejandro", "Agustin"]);
    })
    test('Test 2', () => {
        const result = functionsES6.SetNamesProperly(["FeDeRiCo", "mariANO"]);
        expect(result).toStrictEqual(["Federico", "Mariano"]);
    })
    test('Test 3', () => {
        const result = functionsES6.SetNamesProperly(["AngelA", "Maria"]);
        expect(result).toStrictEqual(["Angela", "Maria"]);
    })
})

describe('Testing People names and People names by age - GetNamesAndNamesByAge', () => {
    test('Test 1', () => {
        const result = functionsES6.GetNamesAndNamesByAge([{ nombre: "Mara", edad: 30 },{ nombre: "Pablo", edad: 35 },{ nombre: "Juan", edad: 26 },{ nombre: "Marta", edad: 56 },{ nombre: "Rodrigo", edad: 31 }]);
        expect(result).toStrictEqual(["Mara", "Pablo", "Juan", "Marta", "Rodrigo"]);
    })
    test('Test 2', () => {
        const result = functionsES6.GetNamesAndNamesByAge([{ nombre: "Mara", edad: 30 },{ nombre: "Pablo", edad: 35 },{ nombre: "Juan", edad: 26 },{ nombre: "Marta", edad: 56 },{ nombre: "Rodrigo", edad: 31 }], 40);
        expect(result).toStrictEqual(["Marta"]);
    })
})

describe('Testing Sumatory of odds inside array - SumOddsFromArray', () => {
    test('Test 1', () => {
        const result = functionsES6.SumOddsFromArray([2,4,6,8]);
        expect(result).toBe(20);
    })
    test('Test 2', () => {
        const result = functionsES6.SumOddsFromArray([1,3,5,7,9,11,13,15,14,17,19]);
        expect(result).toBe(14);
    })
})