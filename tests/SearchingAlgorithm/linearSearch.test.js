const linearSearch = require("../../problemSolving/SearchingAlgorithm/linearSearch");


test('ตัวอย่างที่ 1: arr = [1, 2, 3, 4, 5], target = 3', () => {
    expect(linearSearch([1, 2, 3, 4, 5], 3)).toBe(2);
});

test('ตัวอย่างที่ 2: arr = [1, 2, 3, 4, 5], target = 6', () => {
    expect(linearSearch([1, 2, 3, 4, 5], 6)).toBe(-1);
});

test('ตัวอย่างที่ 3: arr = [10, 20, 30, 40, 50], target = 30', () => {
    expect(linearSearch([10, 20, 30, 40, 50], 30)).toBe(2);
});

test('ตัวอย่างที่ 4: arr = [5, 4, 3, 2, 1], target = 5', () => {
    expect(linearSearch([5, 4, 3, 2, 1], 5)).toBe(0);
});

test('ตัวอย่างที่ 5: arr = [1, 2, 3, 4, 5], target = 1', () => {
    expect(linearSearch([1, 2, 3, 4, 5], 1)).toBe(0);
});

test('ตัวอย่างที่ 6: arr = [5], target = 5', () => {
    expect(linearSearch([5], 5)).toBe(0);
});