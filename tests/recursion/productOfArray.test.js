const productOfArray = require("../../problemSolving/recursion/productOfArray");


test('ตัวอย่างที่ 1: arr = [1, 2, 3, 4]', () => {
    expect(productOfArray([1, 2, 3, 4])).toBe(24);
});

test('ตัวอย่างที่ 2: arr = [5, 5, 5, 5]', () => {
    expect(productOfArray([5, 5, 5, 5])).toBe(625);
});

test('ตัวอย่างที่ 3: arr = [2, 4, 6]', () => {
    expect(productOfArray([2, 4, 6])).toBe(48);
});

test('ตัวอย่างที่ 4: arr = [10]', () => {
    expect(productOfArray([10])).toBe(10);
});

test('ตัวอย่างที่ 5: arr = []', () => {
    expect(productOfArray([])).toBe(1);
});

test('ตัวอย่างที่ 6: arr = [3, 3, 3]', () => {
    expect(productOfArray([3, 3, 3])).toBe(27);
});

test('ตัวอย่างที่ 7: arr = [7, 0, 2]', () => {
    expect(productOfArray([7, 0, 2])).toBe(0);
});

test('ตัวอย่างที่ 8: arr = [1, 2, 3, 0, 4]', () => {
    expect(productOfArray([1, 2, 3, 0, 4])).toBe(0);
});