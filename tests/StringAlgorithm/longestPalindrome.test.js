const longestPalindrome = require("../../problemSolving/StringAlgorithm/longestPalindrome");


test('ตัวอย่างที่ 1: s = "babad"', () => {
    const result = longestPalindrome("babad");
    expect(result === "bab" || result === "aba").toBe(true);
});

test('ตัวอย่างที่ 2: s = "cbbd"', () => {
    expect(longestPalindrome("cbbd")).toBe("bb");
});

test('ตัวอย่างที่ 3: s = "a"', () => {
    expect(longestPalindrome("a")).toBe("a");
});

test('ตัวอย่างที่ 4: s = "ac"', () => {
    const result = longestPalindrome("ac");
    expect(result === "a" || result === "c").toBe(true);
});

test('ตัวอย่างที่ 5: s = "racecar"', () => {
    expect(longestPalindrome("racecar")).toBe("racecar");
});

test('ตัวอย่างที่ 6: s = "noon"', () => {
    expect(longestPalindrome("noon")).toBe("noon");
});

test('ตัวอย่างที่ 7: s = "abba"', () => {
    expect(longestPalindrome("abba")).toBe("abba");
});

test('ตัวอย่างที่ 8: s = "abcdcba"', () => {
    expect(longestPalindrome("abcdcba")).toBe("abcdcba");
});