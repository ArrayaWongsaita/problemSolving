// npm run binarySearch
// โจทย์:
// ให้เขียนฟังก์ชันที่รับค่า array ที่จัดเรียงแล้วและ target และคืนค่าตำแหน่งของ target ใน array ถ้าไม่พบให้คืนค่า -1
//
// Input: arr คือ array ของจำนวนเต็มที่จัดเรียงแล้ว, target คือจำนวนเต็มที่ต้องการค้นหา
// Output: ตำแหน่งของ target ใน array ถ้าไม่พบให้คืนค่า -1
//
// ตัวอย่าง Input และ Output:
// Input: arr = [1, 2, 3, 4, 5], target = 3
// Output: 2
//
// Input: arr = [1, 2, 3, 4, 5], target = 6
// Output: -1

function binarySearch(arr, target) {

}

module.exports = binarySearch;

// ตัวอย่างที่ 1
const arr1 = [1, 2, 3, 4, 5];
const target1 = 3;
console.log(binarySearch(arr1, target1)); // Output: 2

// ตัวอย่างที่ 2
const arr2 = [1, 2, 3, 4, 5];
const target2 = 6;
console.log(binarySearch(arr2, target2)); // Output: -1