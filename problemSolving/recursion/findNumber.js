// npm run findNumber
// โจทย์:
// ให้เขียนฟังก์ชันที่ค้นหาตัวเลขใน array และคืนค่า true ถ้าพบตัวเลขนั้น โดยใช้ recursion
//
// Input: arr คือ array ของจำนวนเต็ม, target คือจำนวนเต็มที่ต้องการค้นหา
// Output: boolean ที่บอกว่าพบตัวเลข target ใน array หรือไม่
//
// ตัวอย่าง Input และ Output:
// Input: arr = [1, 2, 3, 4, 5], target = 3
// Output: true
//
// Input: arr = [1, 2, 3, 4, 5], target = 6
// Output: false

function findNumber(arr, target) {

}

module.exports = findNumber;

// ตัวอย่างการใช้งาน:
console.log(findNumber([1, 2, 3, 4, 5], 3)); // ผลลัพธ์: true
console.log(findNumber([1, 2, 3, 4, 5], 6)); // ผลลัพธ์: false
console.log(findNumber([], 1));               // ผลลัพธ์: false
console.log(findNumber([5, 4, 3, 2, 1], 1));  // ผลลัพธ์: true
console.log(findNumber([5, 4, 3, 2, 1], 0));  // ผลลัพธ์: false