// โจทย์:
// ให้เขียนฟังก์ชันที่รับค่า string และคืนค่า character ตัวแรกที่ไม่ซ้ำกับตัวอื่นใน string นั้น
//
// Input: str คือ string
// Output: character ตัวแรกที่ไม่ซ้ำกับตัวอื่นใน string นั้น
//
// ตัวอย่าง Input และ Output:
// Input: str = "swiss"
// Output: "w"
//
// Input: str = "programming"
// Output: "p"

function firstNonRepeatingCharacter(str) {
  const charCount = {};

  // นับจำนวนครั้งที่แต่ละ character ปรากฏใน string
  for (const char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // หา character ตัวแรกที่ไม่ซ้ำกับตัวอื่น
  for (const char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  return null; // ถ้าไม่มี character ที่ไม่ซ้ำกันเลย
}



// ตัวอย่างที่ 1
const str1 = "swiss";
console.log(firstNonRepeatingCharacter(str1)); // Output: "w"

// ตัวอย่างที่ 2
const str2 = "programming";
console.log(firstNonRepeatingCharacter(str2)); // Output: "p"