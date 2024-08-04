// npm run largestSumContiguousSubarray
// โจทย์:
// ให้เขียนฟังก์ชันที่หาผลรวมของ subarray ที่มีค่ามากที่สุดใน array ของจำนวนเต็ม
//
// Input: arr คือ array ของจำนวนเต็ม
// Output: ผลรวมของ subarray ที่มีค่ามากที่สุด
//
// ตัวอย่าง Input และ Output:
// Input: arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// Output: 6 (subarray ที่มีผลรวมมากที่สุดคือ [4, -1, 2, 1])

function largestSumContiguousSubarray(arr) {

}

module.exports = largestSumContiguousSubarray;

// ตัวอย่างการใช้งาน:
const arr1 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(largestSumContiguousSubarray(arr1)); // ผลลัพธ์: 6

const arr2 = [1];
console.log(largestSumContiguousSubarray(arr2)); // ผลลัพธ์: 1

const arr3 = [5, 4, -1, 7, 8];
console.log(largestSumContiguousSubarray(arr3)); // ผลลัพธ์: 23

const arr4 = [-1];
console.log(largestSumContiguousSubarray(arr4)); // ผลลัพธ์: -1

const arr5 = [-2, -3, -1, -5];
console.log(largestSumContiguousSubarray(arr5)); // ผลลัพธ์: -1

const arr6 = [1, 2, 3, 4, 5];
console.log(largestSumContiguousSubarray(arr6)); // ผลลัพธ์: 15

const arr7 = [0, 0, 0, 0, 0];
console.log(largestSumContiguousSubarray(arr7)); // ผลลัพธ์: 0

const arr8 = [0, -1, 2, -3, 4, -5, 6];
console.log(largestSumContiguousSubarray(arr8)); // ผลลัพธ์: 6
