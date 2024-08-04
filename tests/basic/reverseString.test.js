const reverseString = require("../../problemSolving/basic/reverseString");



test('ตัวอย่างที่ 1: s = "hello"', () => {
    expect(reverseString("hello")).toBe("olleh");
});

test('ตัวอย่างที่ 2: s = "world"', () => {
    expect(reverseString("world")).toBe("dlrow");
});

test('ตัวอย่างที่ 3: s = "JavaScript"', () => {
    expect(reverseString("JavaScript")).toBe("tpircSavaJ");
});

test('ตัวอย่างที่ 4: s = "racecar"', () => {
    expect(reverseString("racecar")).toBe("racecar");
});

test('ตัวอย่างที่ 5: s = "OpenAI"', () => {
    expect(reverseString("OpenAI")).toBe("IAnepO");
});