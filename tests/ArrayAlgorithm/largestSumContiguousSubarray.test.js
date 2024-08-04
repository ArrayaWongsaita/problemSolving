const largestSumContiguousSubarray = require("../../problemSolving/ArrayAlgorithm/largestSumContiguousSubarray");


test('ตัวอย่างที่ 1: arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]', () => {
    expect(largestSumContiguousSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
});

test('ตัวอย่างที่ 2: arr = [1]', () => {
    expect(largestSumContiguousSubarray([1])).toBe(1);
});

test('ตัวอย่างที่ 3: arr = [5, 4, -1, 7, 8]', () => {
    expect(largestSumContiguousSubarray([5, 4, -1, 7, 8])).toBe(23);
});

test('ตัวอย่างที่ 4: arr = [-1]', () => {
    expect(largestSumContiguousSubarray([-1])).toBe(-1);
});

test('ตัวอย่างที่ 5: arr = [-2, -3, -1, -5]', () => {
    expect(largestSumContiguousSubarray([-2, -3, -1, -5])).toBe(-1);
});

test('ตัวอย่างที่ 6: arr = [1, 2, 3, 4, 5]', () => {
    expect(largestSumContiguousSubarray([1, 2, 3, 4, 5])).toBe(15);
});

test('ตัวอย่างที่ 7: arr = [0, 0, 0, 0, 0]', () => {
    expect(largestSumContiguousSubarray([0, 0, 0, 0, 0])).toBe(0);
});

test('ตัวอย่างที่ 8: arr = [0, -1, 2, -3, 4, -5, 6]', () => {
    expect(largestSumContiguousSubarray([0, -1, 2, -3, 4, -5, 6])).toBe(6);
});

test('ตัวอย่างที่ 9: arr = [1, -2, 3, 10, -4, 7, 2, -5]', () => {
    expect(largestSumContiguousSubarray([1, -2, 3, 10, -4, 7, 2, -5])).toBe(18);
});

test('ตัวอย่างที่ 10: arr = [-2, -3, 4, -1, -2, 1, 5, -3]', () => {
    expect(largestSumContiguousSubarray([-2, -3, 4, -1, -2, 1, 5, -3])).toBe(7);
});

test('ตัวอย่างที่ 11: arr = [-2, -3, -4, -1, -2, -1, -5, -3]', () => {
    expect(largestSumContiguousSubarray([-2, -3, -4, -1, -2, -1, -5, -3])).toBe(-1);
});