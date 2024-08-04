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
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    
    if (arr[mid] === target) {
      return mid; // คืนค่าตำแหน่งที่พบ
    } else if (arr[mid] < target) {
      left = mid + 1; // ค้นหาในครึ่งขวา
    } else {
      right = mid - 1; // ค้นหาในครึ่งซ้าย
    }
  }

  return -1; // คืนค่า -1 ถ้าไม่พบ
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