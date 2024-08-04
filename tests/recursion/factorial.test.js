const factorial = require("../../problemSolving/recursion/factorial");


test('ตัวอย่างที่ 1: n = 5', () => {
    expect(factorial(5)).toBe(120);
});

test('ตัวอย่างที่ 2: n = 0', () => {
    expect(factorial(0)).toBe(1);
});

test('ตัวอย่างที่ 3: n = 10', () => {
    expect(factorial(10)).toBe(3628800);
});

test('ตัวอย่างที่ 4: n = 1', () => {
    expect(factorial(1)).toBe(1);
});

test('ตัวอย่างที่ 5: n = 3', () => {
    expect(factorial(3)).toBe(6);
});

test('กรณีข้อผิดพลาด: n = -1', () => {
    expect(() => factorial(-1)).toThrow("n must be a non-negative integer");
});