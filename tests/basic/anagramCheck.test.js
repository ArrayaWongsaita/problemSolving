const anagramCheck = require("../../problemSolving/basic/anagramCheck");


test('ตัวอย่างที่ 1: str1 = "listen", str2 = "silent"', () => {
    expect(anagramCheck("listen", "silent")).toBe(true);
});

test('ตัวอย่างที่ 2: str1 = "hello", str2 = "world"', () => {
    expect(anagramCheck("hello", "world")).toBe(false);
});

test('ตัวอย่างที่ 3: str1 = "triangle", str2 = "integral"', () => {
    expect(anagramCheck("triangle", "integral")).toBe(true);
});

test('ตัวอย่างที่ 4: str1 = "apple", str2 = "papel"', () => {
    expect(anagramCheck("apple", "papel")).toBe(true);
});

test('ตัวอย่างที่ 5: str1 = "rat", str2 = "car"', () => {
    expect(anagramCheck("rat", "car")).toBe(false);
});

test('ตัวอย่างที่ 6: str1 = "dormitory", str2 = "dirtyroom"', () => {
    expect(anagramCheck("dormitory", "dirtyroom")).toBe(true);
});