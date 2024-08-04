const quickSort = require("../../problemSolving/SortingAlgorithm/quickSort");


test('ตัวอย่างที่ 1: arr = [3, 6, 8, 10, 1, 2, 1]', () => {
    expect(quickSort([3, 6, 8, 10, 1, 2, 1])).toEqual([1, 1, 2, 3, 6, 8, 10]);
});

test('ตัวอย่างที่ 2: arr = [10, 7, 8, 9, 1, 5]', () => {
    expect(quickSort([10, 7, 8, 9, 1, 5])).toEqual([1, 5, 7, 8, 9, 10]);
});

test('ตัวอย่างที่ 3: arr = [5, 4, 3, 2, 1]', () => {
    expect(quickSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
});

test('ตัวอย่างที่ 4: arr = [1, 2, 3, 4, 5]', () => {
    expect(quickSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
});

test('ตัวอย่างที่ 5: arr = [2]', () => {
    expect(quickSort([2])).toEqual([2]);
});

test('ตัวอย่างที่ 6: arr = []', () => {
    expect(quickSort([])).toEqual([]);
});