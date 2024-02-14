const functionsES6 = require("./main.js");

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