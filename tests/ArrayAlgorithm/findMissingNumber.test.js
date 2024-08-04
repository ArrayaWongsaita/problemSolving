const findMissingNumber = require("../../problemSolving/ArrayAlgorithm/findMissingNumber");


test('ตัวอย่างที่ 1: arr = [1, 2, 4, 5, 6]', () => {
    expect(findMissingNumber([1, 2, 4, 5, 6])).toBe(3);
});

test('ตัวอย่างที่ 2: arr = [3, 7, 1, 2, 8, 4, 5]', () => {
    expect(findMissingNumber([3, 7, 1, 2, 8, 4, 5])).toBe(6);
});

test('ตัวอย่างที่ 3: arr = [1, 2]', () => {
    expect(findMissingNumber([1, 2])).toBe(3);
});

test('ตัวอย่างที่ 4: arr = [2, 3, 4, 5, 6]', () => {
    expect(findMissingNumber([2, 3, 4, 5, 6])).toBe(1);
});

test('ตัวอย่างที่ 5: arr = [1]', () => {
    expect(findMissingNumber([1])).toBe(2);
});

test('ตัวอย่างที่ 6: arr = [1, 3]', () => {
    expect(findMissingNumber([1, 3])).toBe(2);
});

test('ตัวอย่างที่ 7: arr = [2, 3]', () => {
    expect(findMissingNumber([2, 3])).toBe(1);
});

test('ตัวอย่างที่ 8: arr = [4, 2, 1]', () => {
    expect(findMissingNumber([4, 2, 1])).toBe(3);
});