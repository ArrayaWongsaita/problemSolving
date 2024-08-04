// npm run balancedParentheses
// โจทย์:
// ให้เขียนฟังก์ชันที่รับค่า string ของ parentheses และคืนค่า boolean ว่า string นั้นมีการเปิด-ปิดอย่างสมดุลหรือไม่
//
// Input: str คือ string ของ parentheses
// Output: boolean ที่บอกว่า str มีการเปิด-ปิดอย่างสมดุลหรือไม่
//
// ตัวอย่าง Input และ Output:
// Input: str = "()"
// Output: true
//
// Input: str = "(()"
// Output: false

function balancedParentheses(str) {

}



// ตัวอย่างที่ 1
const str1 = "()";
console.log(balancedParentheses(str1)); // Output: true

// ตัวอย่างที่ 2
const str2 = "(()";
console.log(balancedParentheses(str2)); // Output: false