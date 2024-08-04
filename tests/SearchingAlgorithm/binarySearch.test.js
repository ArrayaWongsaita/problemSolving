const binarySearch = require("../../problemSolving/SearchingAlgorithm/binarySearch");


test('ตัวอย่างที่ 1: arr = [1, 2, 3, 4, 5], target = 3', () => {
    expect(binarySearch([1, 2, 3, 4, 5], 3)).toBe(2);
});

test('ตัวอย่างที่ 2: arr = [1, 2, 3, 4, 5], target = 6', () => {
    expect(binarySearch([1, 2, 3, 4, 5], 6)).toBe(-1);
});

test('ตัวอย่างที่ 3: arr = [10, 20, 30, 40, 50], target = 30', () => {
    expect(binarySearch([10, 20, 30, 40, 50], 30)).toBe(2);
});

test('ตัวอย่างที่ 4: arr = [5, 10, 15, 20, 25, 30], target = 10', () => {
    expect(binarySearch([5, 10, 15, 20, 25, 30], 10)).toBe(1);
});

test('ตัวอย่างที่ 5: arr = [1, 3, 5, 7, 9, 11], target = 11', () => {
    expect(binarySearch([1, 3, 5, 7, 9, 11], 11)).toBe(5);
});

test('ตัวอย่างที่ 6: arr = [1], target = 1', () => {
    expect(binarySearch([1], 1)).toBe(0);
});