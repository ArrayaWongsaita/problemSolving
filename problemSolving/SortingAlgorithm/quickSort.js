// npm run quickSort
// โจทย์:
// ให้เขียนฟังก์ชันที่เรียงลำดับ array ของตัวเลขโดยใช้วิธี QuickSort
//
// Input: arr คือ array ของจำนวนเต็ม
// Output: array ที่ถูกเรียงลำดับจากน้อยไปมาก
//
// ตัวอย่าง Input และ Output:
// Input: arr = [3, 6, 8, 10, 1, 2, 1]
// Output: [1, 1, 2, 3, 6, 8, 10]

function quickSort(arr, low = 0, high = arr.length - 1) {

}

module.exports = quickSort;

// ตัวอย่างที่ 1
const arr1 = [3, 6, 8, 10, 1, 2, 1];
console.log(quickSort(arr1)); // Output: [1, 1, 2, 3, 6, 8, 10]

// ตัวอย่างที่ 2
const arr2 = [10, 7, 8, 9, 1, 5];
console.log(quickSort(arr2)); // Output: [1, 5, 7, 8, 9, 10]