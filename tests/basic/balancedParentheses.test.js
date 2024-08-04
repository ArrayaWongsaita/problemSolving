const balancedParentheses = require("../../problemSolving/basic/balancedParentheses");


test('ตัวอย่างที่ 1: str = "()"', () => {
    expect(balancedParentheses("()")).toBe(true);
});

test('ตัวอย่างที่ 2: str = "(()"', () => {
    expect(balancedParentheses("(()")).toBe(false);
});

test('ตัวอย่างที่ 3: str = "{[()]}"', () => {
    expect(balancedParentheses("{[()]}")).toBe(true);
});

test('ตัวอย่างที่ 4: str = "{[(])}"', () => {
    expect(balancedParentheses("{[(])}")).toBe(false);
});

test('ตัวอย่างที่ 5: str = "((()))"', () => {
    expect(balancedParentheses("((()))")).toBe(true);
});

test('ตัวอย่างที่ 6: str = "[(])"', () => {
    expect(balancedParentheses("[(])")).toBe(false);
});