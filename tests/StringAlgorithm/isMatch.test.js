const isMatch = require("../../problemSolving/StringAlgorithm/isMatch");


test('ตัวอย่างที่ 1: text = "aa", pattern = "a"', () => {
    expect(isMatch("aa", "a")).toBe(false);
});

test('ตัวอย่างที่ 2: text = "aa", pattern = "*"', () => {
    expect(isMatch("aa", "*")).toBe(true);
});

test('ตัวอย่างที่ 3: text = "cb", pattern = "?a"', () => {
    expect(isMatch("cb", "?a")).toBe(false);
});

test('ตัวอย่างที่ 4: text = "adceb", pattern = "*a*b"', () => {
    expect(isMatch("adceb", "*a*b")).toBe(true);
});

test('ตัวอย่างที่ 5: text = "acdcb", pattern = "a*c?b"', () => {
    expect(isMatch("acdcb", "a*c?b")).toBe(false);
});

test('ตัวอย่างที่ 6: text = "abcde", pattern = "a*e"', () => {
    expect(isMatch("abcde", "a*e")).toBe(true);
});

test('ตัวอย่างที่ 7: text = "abcde", pattern = "a*d"', () => {
    expect(isMatch("abcde", "a*d")).toBe(false);
});

test('ตัวอย่างที่ 8: text = "abc", pattern = "???c"', () => {
    expect(isMatch("abc", "???c")).toBe(false);
});

test('ตัวอย่างที่ 9: text = "abc", pattern = "a??"', () => {
    expect(isMatch("abc", "a??")).toBe(true);
});

test('ตัวอย่างที่ 10: text = "xyz", pattern = "x?z"', () => {
    expect(isMatch("xyz", "x?z")).toBe(true);
});