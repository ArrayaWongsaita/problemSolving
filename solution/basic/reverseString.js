// โจทย์:
// ให้เขียนฟังก์ชันที่รับค่า string และคืนค่า string ที่ถูกกลับด้าน
//
// Input: s คือ string ที่ต้องการกลับด้าน
// Output: string ที่ถูกกลับด้าน
//
// ตัวอย่าง Input และ Output:
// Input: s = "hello"
// Output: "olleh"
//
// Input: s = "world"
// Output: "dlrow"

function reverseString(s) {
  return s.split('').reverse().join('');
}



// ตัวอย่างที่ 1
const s1 = "hello";
console.log(reverseString(s1)); // Output: "olleh"

// ตัวอย่างที่ 2
const s2 = "world";
console.log(reverseString(s2)); // Output: "dlrow"