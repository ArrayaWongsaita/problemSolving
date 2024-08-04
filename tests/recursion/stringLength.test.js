const stringLength = require("../../problemSolving/recursion/stringLength");


test('ตัวอย่างที่ 1: str = "hello"', () => {
    expect(stringLength("hello")).toBe(5);
});

test('ตัวอย่างที่ 2: str = ""', () => {
    expect(stringLength("")).toBe(0);
});

test('ตัวอย่างที่ 3: str = "OpenAI"', () => {
    expect(stringLength("OpenAI")).toBe(6);
});

test('ตัวอย่างที่ 4: str = "recursion"', () => {
    expect(stringLength("recursion")).toBe(9);
});

test('ตัวอย่างที่ 5: str = "a"', () => {
    expect(stringLength("a")).toBe(1);
});