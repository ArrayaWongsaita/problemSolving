const evenOddChecker = require("../../problemSolving/BitManipulationAlgorithm/evenOddChecker");


test('ตัวอย่างที่ 1: num = 4', () => {
    expect(evenOddChecker(4)).toBe("Even");
});

test('ตัวอย่างที่ 2: num = 7', () => {
    expect(evenOddChecker(7)).toBe("Odd");
});

test('ตัวอย่างที่ 3: num = 0', () => {
    expect(evenOddChecker(0)).toBe("Even");
});

test('ตัวอย่างที่ 4: num = -2', () => {
    expect(evenOddChecker(-2)).toBe("Even");
});

test('ตัวอย่างที่ 5: num = -3', () => {
    expect(evenOddChecker(-3)).toBe("Odd");
});

test('ตัวอย่างที่ 6: num = 1', () => {
    expect(evenOddChecker(1)).toBe("Odd");
});