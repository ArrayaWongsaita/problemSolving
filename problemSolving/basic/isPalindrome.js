// npm run isPalindrome
// โจทย์:
// ตรวจสอบว่า string ที่ให้มาเป็น palindrome หรือไม่ (คำว่า palindrome หมายถึงคำที่อ่านจากซ้ายไปขวาหรือจากขวาไปซ้ายก็ได้ค่าเท่ากัน เช่น "madam", "racecar")
// 
// Input: string s
// Output: true ถ้า string s เป็น palindrome, false ถ้า string s ไม่เป็น palindrome
//
// ตัวอย่าง Input และ Output:
// Input: s = "madam"
// Output: true
//
// Input: s = "hello"
// Output: false

function isPalindrome(s) {

// code here

}

module.exports = isPalindrome;

// ตัวอย่างที่ 1
const s1 = "madam";
console.log(isPalindrome(s1)); // Output: true

// ตัวอย่างที่ 2
const s2 = "hello";
console.log(isPalindrome(s2)); // Output: false

// ตัวอย่างที่ 3
const s3 = "A man, a plan, a canal, Panama";
console.log(isPalindrome(s3)); // Output: true