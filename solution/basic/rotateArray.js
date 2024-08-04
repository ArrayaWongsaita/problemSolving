// โจทย์:
// ให้เขียนฟังก์ชันที่รับค่า array และจำนวนครั้งที่ต้องหมุนทางขวา k และคืนค่า array ที่ถูกหมุนแล้ว
//
// Input: nums คือ array ของตัวเลข, k คือจำนวนครั้งที่ต้องหมุนทางขวา
// Output: array ที่ถูกหมุนแล้ว
//
// ตัวอย่าง Input และ Output:
// Input: nums = [1, 2, 3, 4, 5, 6, 7], k = 3
// Output: [5, 6, 7, 1, 2, 3, 4]
//
// Input: nums = [-1, -100, 3, 99], k = 2
// Output: [3, 99, -1, -100]

function rotateArray(nums, k) {
  k = k % nums.length; // ป้องกันกรณีที่ k มากกว่าความยาวของ array
  return nums.slice(-k).concat(nums.slice(0, -k));
}



// ตัวอย่างที่ 1
const nums1 = [1, 2, 3, 4, 5, 6, 7];
const k1 = 3;
console.log(rotateArray(nums1, k1)); // Output: [5, 6, 7, 1, 2, 3, 4]

// ตัวอย่างที่ 2
const nums2 = [-1, -100, 3, 99];
const k2 = 2;
console.log(rotateArray(nums2, k2)); // Output: [3, 99, -1, -100]