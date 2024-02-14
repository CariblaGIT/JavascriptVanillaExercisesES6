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