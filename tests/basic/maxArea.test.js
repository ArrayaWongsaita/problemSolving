const maxArea = require("../../problemSolving/basic/maxArea");


test('ตัวอย่างที่ 1: heights = [1, 8, 6, 2, 5, 4, 8, 3, 7]', () => {
    expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
});

test('ตัวอย่างที่ 2: heights = [1, 1]', () => {
    expect(maxArea([1, 1])).toBe(1);
});

test('ตัวอย่างที่ 3: heights = [4, 3, 2, 1, 4]', () => {
    expect(maxArea([4, 3, 2, 1, 4])).toBe(16);
});

test('ตัวอย่างที่ 4: heights = [1, 2, 1]', () => {
    expect(maxArea([1, 2, 1])).toBe(2);
});

test('ตัวอย่างที่ 5: heights = [1, 3, 2, 5, 25, 24, 5]', () => {
    expect(maxArea([1, 3, 2, 5, 25, 24, 5])).toBe(24);
});