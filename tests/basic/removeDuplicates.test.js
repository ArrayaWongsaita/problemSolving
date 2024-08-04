const removeDuplicates = require("../../problemSolving/basic/removeDuplicates");


test('ตัวอย่างที่ 1: arr = [1, 2, 2, 3, 4, 4, 5]', () => {
    expect(removeDuplicates([1, 2, 2, 3, 4, 4, 5])).toBe(5);
});

test('ตัวอย่างที่ 2: arr = [1, 1, 1, 1, 1]', () => {
    expect(removeDuplicates([1, 1, 1, 1, 1])).toBe(1);
});

test('ตัวอย่างที่ 3: arr = [1, 2, 3, 4, 5]', () => {
    expect(removeDuplicates([1, 2, 3, 4, 5])).toBe(5);
});

test('ตัวอย่างที่ 4: arr = [5, 5, 5, 5, 5]', () => {
    expect(removeDuplicates([5, 5, 5, 5, 5])).toBe(1);
});

test('ตัวอย่างที่ 5: arr = []', () => {
    expect(removeDuplicates([])).toBe(0); // handle empty array
});

test('ตัวอย่างที่ 6: arr = [1, 2, 3, 1, 2, 3]', () => {
    expect(removeDuplicates([1, 2, 3, 1, 2, 3])).toBe(3);
});