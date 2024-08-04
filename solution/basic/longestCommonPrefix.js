// โจทย์:
// ให้เขียนฟังก์ชันที่รับค่า array ของ string และคืนค่า prefix ที่ยาวที่สุดที่ common ใน string ทั้งหมดใน array
//
// Input: strs คือ array ของ string
// Output: string ที่เป็น prefix ที่ยาวที่สุดที่ common ใน string ทั้งหมดใน array
//
// ตัวอย่าง Input และ Output:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"
//
// Input: strs = ["dog","racecar","car"]
// Output: ""

function longestCommonPrefix(strs) {
  if (strs.length === 0) return "";

  let prefix = strs[0];
  
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
      if (prefix === "") return "";
    }
  }

  return prefix;
}



// ตัวอย่างที่ 1
const strs1 = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strs1)); // Output: "fl"

// ตัวอย่างที่ 2
const strs2 = ["dog", "racecar", "car"];
console.log(longestCommonPrefix(strs2)); // Output: ""