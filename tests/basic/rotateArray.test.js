const rotateArray = require("../../problemSolving/basic/rotateArray");


test('ตัวอย่างที่ 1: nums = [1, 2, 3, 4, 5, 6, 7], k = 3', () => {
    expect(rotateArray([1, 2, 3, 4, 5, 6, 7], 3)).toEqual([5, 6, 7, 1, 2, 3, 4]);
});

test('ตัวอย่างที่ 2: nums = [-1, -100, 3, 99], k = 2', () => {
    expect(rotateArray([-1, -100, 3, 99], 2)).toEqual([3, 99, -1, -100]);
});

test('ตัวอย่างที่ 3: nums = [1, 2], k = 3', () => {
    expect(rotateArray([1, 2], 3)).toEqual([2, 1]);
});

test('ตัวอย่างที่ 4: nums = [1, 2, 3], k = 0', () => {
    expect(rotateArray([1, 2, 3], 0)).toEqual([1, 2, 3]);
});

test('ตัวอย่างที่ 5: nums = [1, 2, 3, 4], k = 4', () => {
    expect(rotateArray([1, 2, 3, 4], 4)).toEqual([1, 2, 3, 4]);
});