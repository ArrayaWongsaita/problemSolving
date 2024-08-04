const mergeSortedArrays = require("../../problemSolving/basic/mergeSortedArrays");


test('ตัวอย่างที่ 1: arr1 = [1, 3, 5], arr2 = [2, 4, 6]', () => {
    expect(mergeSortedArrays([1, 3, 5], [2, 4, 6])).toEqual([1, 2, 3, 4, 5, 6]);
});

test('ตัวอย่างที่ 2: arr1 = [1, 2, 3], arr2 = [4, 5, 6]', () => {
    expect(mergeSortedArrays([1, 2, 3], [4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
});

test('ตัวอย่างที่ 3: arr1 = [0, 2, 4], arr2 = [1, 3, 5]', () => {
    expect(mergeSortedArrays([0, 2, 4], [1, 3, 5])).toEqual([0, 1, 2, 3, 4, 5]);
});

test('ตัวอย่างที่ 4: arr1 = [1, 1, 1], arr2 = [1, 1, 1]', () => {
    expect(mergeSortedArrays([1, 1, 1], [1, 1, 1])).toEqual([1, 1, 1, 1, 1, 1]);
});

test('ตัวอย่างที่ 5: arr1 = [], arr2 = [1, 2, 3]', () => {
    expect(mergeSortedArrays([], [1, 2, 3])).toEqual([1, 2, 3]);
});

test('ตัวอย่างที่ 6: arr1 = [1, 2, 3], arr2 = []', () => {
    expect(mergeSortedArrays([1, 2, 3], [])).toEqual([1, 2, 3]);
});