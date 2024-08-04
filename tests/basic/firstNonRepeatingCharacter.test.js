const firstNonRepeatingCharacter = require("../../problemSolving/basic/firstNonRepeatingCharacter");


test('ตัวอย่างที่ 1: str = "swiss"', () => {
    expect(firstNonRepeatingCharacter("swiss")).toBe("w");
});

test('ตัวอย่างที่ 2: str = "programming"', () => {
    expect(firstNonRepeatingCharacter("programming")).toBe("p");
});

test('ตัวอย่างที่ 3: str = "aabbcc"', () => {
    expect(firstNonRepeatingCharacter("aabbcc")).toBeNull(); // ไม่มีตัวที่ไม่ซ้ำ
});

test('ตัวอย่างที่ 4: str = "xxyz"', () => {
    expect(firstNonRepeatingCharacter("xxyz")).toBe("y");
});

test('ตัวอย่างที่ 5: str = "abcdefg"', () => {
    expect(firstNonRepeatingCharacter("abcdefg")).toBe("a");
});

test('ตัวอย่างที่ 6: str = "aabcc"', () => {
    expect(firstNonRepeatingCharacter("aabcc")).toBe("b");
});