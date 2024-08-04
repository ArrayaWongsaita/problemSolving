const editDistance = require("../../problemSolving/StringAlgorithm/editDistance");



test('ตัวอย่างที่ 1: str1 = "kitten", str2 = "sitting"', () => {
    expect(editDistance("kitten", "sitting")).toBe(3);
});

test('ตัวอย่างที่ 2: str1 = "flaw", str2 = "lawn"', () => {
    expect(editDistance("flaw", "lawn")).toBe(2);
});

test('ตัวอย่างที่ 3: str1 = "intention", str2 = "execution"', () => {
    expect(editDistance("intention", "execution")).toBe(5);
});

test('ตัวอย่างที่ 4: str1 = "abc", str2 = "yabd"', () => {
    expect(editDistance("abc", "yabd")).toBe(2);
});

test('ตัวอย่างที่ 5: str1 = "abcdef", str2 = "azced"', () => {
    expect(editDistance("abcdef", "azced")).toBe(3);
});

test('ตัวอย่างที่ 6: str1 = "horse", str2 = "ros"', () => {
    expect(editDistance("horse", "ros")).toBe(3);
});

test('ตัวอย่างที่ 7: str1 = "park", str2 = "spake"', () => {
    expect(editDistance("park", "spake")).toBe(3);
});

test('ตัวอย่างที่ 8: str1 = "a", str2 = "b"', () => {
    expect(editDistance("a", "b")).toBe(1);
});

test('ตัวอย่างที่ 9: str1 = "", str2 = ""', () => {
    expect(editDistance("", "")).toBe(0);
});

