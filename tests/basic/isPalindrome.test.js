const isPalindrome = require("../../problemSolving/basic/isPalindrome");


test('ตัวอย่างที่ 1: madam', () => {
    expect(isPalindrome("madam")).toBe(true);
});

test('ตัวอย่างที่ 2: hello', () => {
    expect(isPalindrome("hello")).toBe(false);
});

test('ตัวอย่างที่ 3: A man, a plan, a canal, Panama', () => {
    expect(isPalindrome("A man, a plan, a canal, Panama")).toBe(true);
});

test('ตัวอย่างที่ 4: No lemon, no melon', () => {
    expect(isPalindrome("No lemon, no melon")).toBe(true);
});

test('ตัวอย่างที่ 5: Was it a car or a cat I saw', () => {
    expect(isPalindrome("Was it a car or a cat I saw")).toBe(true);
});