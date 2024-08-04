// โจทย์:
// ให้เขียนฟังก์ชันที่รับค่าจำนวนเต็ม และคืนค่าข้อความว่าเป็นเลขคู่หรือเลขคี่
//
// Input: num คือจำนวนเต็ม
// Output: string ที่บอกว่า num เป็น "Even" หรือ "Odd"
//
// ตัวอย่าง Input และ Output:
// Input: num = 4
// Output: "Even"
//
// Input: num = 7
// Output: "Odd"

function evenOddChecker(num) {
  return num % 2 === 0 ? "Even" : "Odd";
}



// ตัวอย่างที่ 1
const num1 = 4;
console.log(evenOddChecker(num1)); // Output: "Even"

// ตัวอย่างที่ 2
const num2 = 7;
console.log(evenOddChecker(num2)); // Output: "Odd"