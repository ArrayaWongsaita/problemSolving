const findNumber = require("../../problemSolving/recursion/findNumber");


test('ตัวอย่างที่ 1: arr = [1, 2, 3, 4, 5], target = 3', () => {
    expect(findNumber([1, 2, 3, 4, 5], 3)).toBe(true);
});

test('ตัวอย่างที่ 2: arr = [1, 2, 3, 4, 5], target = 6', () => {
    expect(findNumber([1, 2, 3, 4, 5], 6)).toBe(false);
});

test('ตัวอย่างที่ 3: arr = [], target = 1', () => {
    expect(findNumber([], 1)).toBe(false);
});

test('ตัวอย่างที่ 4: arr = [5, 4, 3, 2, 1], target = 1', () => {
    expect(findNumber([5, 4, 3, 2, 1], 1)).toBe(true);
});

test('ตัวอย่างที่ 5: arr = [5, 4, 3, 2, 1], target = 0', () => {
    expect(findNumber([5, 4, 3, 2, 1], 0)).toBe(false);
});

test('ตัวอย่างที่ 6: arr = [10, 20, 30, 40, 50], target = 40', () => {
    expect(findNumber([10, 20, 30, 40, 50], 40)).toBe(true);
});

test('ตัวอย่างที่ 7: arr = [10, 20, 30, 40, 50], target = 60', () => {
    expect(findNumber([10, 20, 30, 40, 50], 60)).toBe(false);
});