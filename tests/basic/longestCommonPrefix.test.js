const longestCommonPrefix = require("../../problemSolving/basic/longestCommonPrefix");


test('ตัวอย่างที่ 1: strs = ["flower", "flow", "flight"]', () => {
    expect(longestCommonPrefix(["flower", "flow", "flight"])).toBe("fl");
});

test('ตัวอย่างที่ 2: strs = ["dog", "racecar", "car"]', () => {
    expect(longestCommonPrefix(["dog", "racecar", "car"])).toBe("");
});

test('ตัวอย่างที่ 3: strs = ["interspecies", "interstellar", "interstate"]', () => {
    expect(longestCommonPrefix(["interspecies", "interstellar", "interstate"])).toBe("inters");
});

test('ตัวอย่างที่ 4: strs = ["throne", "throne", "throne"]', () => {
    expect(longestCommonPrefix(["throne", "throne", "throne"])).toBe("throne");
});

test('ตัวอย่างที่ 5: strs = [""]', () => {
    expect(longestCommonPrefix([""])).toBe("");
});

test('ตัวอย่างที่ 6: strs = ["prefix", "preach", "prevent"]', () => {
    expect(longestCommonPrefix(["prefix", "preach", "prevent"])).toBe("pre");
});