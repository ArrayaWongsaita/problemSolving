// โจทย์:
// ให้เขียนฟังก์ชันที่รับค่าจำนวนเต็มบวก และคืนค่าจำนวนบิตที่ตั้งค่าเป็น 1 (set bits) ในตัวเลขนั้น
//
// Input: n คือจำนวนเต็มบวก
// Output: จำนวนบิตที่ตั้งค่าเป็น 1 (set bits) ในตัวเลขนั้น
//
// ตัวอย่าง Input และ Output:
// Input: n = 5
// Output: 2 (ตัวเลข 5 ใน binary คือ 101)
//
// Input: n = 7
// Output: 3 (ตัวเลข 7 ใน binary คือ 111)

function countSetBits(n) {
  let count = 0;
  while (n) {
    count += n & 1;
    n >>= 1;
  }
  return count;
}



// ตัวอย่างที่ 1
const n1 = 5;
console.log(countSetBits(n1)); // Output: 2

// ตัวอย่างที่ 2
const n2 = 7;
console.log(countSetBits(n2)); // Output: 3