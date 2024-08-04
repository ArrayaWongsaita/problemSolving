const countSetBits = require("../../problemSolving/BitManipulationAlgorithm/countSetBits");


test('ตัวอย่างที่ 1: n = 5', () => {
    expect(countSetBits(5)).toBe(2);
});

test('ตัวอย่างที่ 2: n = 7', () => {
    expect(countSetBits(7)).toBe(3);
});

test('ตัวอย่างที่ 3: n = 0', () => {
    expect(countSetBits(0)).toBe(0);
});

test('ตัวอย่างที่ 4: n = 1', () => {
    expect(countSetBits(1)).toBe(1);
});

test('ตัวอย่างที่ 5: n = 10', () => {
    expect(countSetBits(10)).toBe(2); // 10 ใน binary คือ 1010
});

test('ตัวอย่างที่ 6: n = 1023', () => {
    expect(countSetBits(1023)).toBe(10); // 1023 ใน binary คือ 1111111111
});