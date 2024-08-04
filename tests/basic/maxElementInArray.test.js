const maxElementInArray = require("../../problemSolving/basic/maxElementInArray");

maxElementInArray

test('ตัวอย่างที่ 1: arr = [1, 3, 5, 7, 9]', () => {
    expect(maxElementInArray([1, 3, 5, 7, 9])).toBe(9);
});

test('ตัวอย่างที่ 2: arr = [-1, -3, -5, -7, -9]', () => {
    expect(maxElementInArray([-1, -3, -5, -7, -9])).toBe(-1);
});

test('ตัวอย่างที่ 3: arr = [100, 200, 300, 400, 500]', () => {
    expect(maxElementInArray([100, 200, 300, 400, 500])).toBe(500);
});

test('ตัวอย่างที่ 4: arr = [0, -1, 2, -3, 4]', () => {
    expect(maxElementInArray([0, -1, 2, -3, 4])).toBe(4);
});

test('ตัวอย่างที่ 5: arr = [5]', () => {
    expect(maxElementInArray([5])).toBe(5);
});

test('ตัวอย่างที่ 6: arr = []', () => {
    expect(maxElementInArray([])).toBeNull(); // handle empty array
});