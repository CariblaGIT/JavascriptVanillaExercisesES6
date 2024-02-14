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
            const result = functionsES6.RepetitiveElementsFromArray([1.765, 0.3245, 1.765, -9.99999, 0, 1.765, 10.01010101010]);
            expect(result).toStrictEqual([1.765, 3]);
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
    test('Test 1.1', () => {
        const result = functionsES6.FillListWithElementsNTimes(2, 4);
        expect(result).toStrictEqual([4, 4]);
    })
    test('Test 1.2', () => {
        const result = functionsES6.FillListWithElementsNTimes(1, "Fish");
        expect(result).toStrictEqual(["Fish"]);
    })
    test('Test 1.3', () => {
        const result = functionsES6.FillListWithElementsNTimes(0, 8.1234567);
        expect(result).toStrictEqual([ ]);
    })
})