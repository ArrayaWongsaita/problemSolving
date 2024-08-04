const swapNumbers = require("../../problemSolving/BitManipulationAlgorithm/swapNumbers");



test('ตัวอย่างที่ 1: a = 3, b = 5', () => {
    expect(swapNumbers(3, 5)).toEqual([5, 3]);
});

test('ตัวอย่างที่ 2: a = -1, b = 10', () => {
    expect(swapNumbers(-1, 10)).toEqual([10, -1]);
});

test('ตัวอย่างที่ 3: a = 0, b = 0', () => {
    expect(swapNumbers(0, 0)).toEqual([0, 0]);
});

test('ตัวอย่างที่ 4: a = -5, b = -10', () => {
    expect(swapNumbers(-5, -10)).toEqual([-10, -5]);
});

test('ตัวอย่างที่ 5: a = 123, b = 456', () => {
    expect(swapNumbers(123, 456)).toEqual([456, 123]);
});