// npm run productOfArray
// โจทย์:
// ให้เขียนฟังก์ชันที่หาผลคูณของตัวเลขใน array โดยใช้ recursion
//
// Input: arr คือ array ของจำนวนเต็ม
// Output: ผลคูณของตัวเลขทั้งหมดใน array
//
// ตัวอย่าง Input และ Output:
// Input: arr = [1, 2, 3, 4]
// Output: 24 (1 * 2 * 3 * 4 = 24)
//
// Input: arr = [5, 5, 5, 5]
// Output: 625 (5 * 5 * 5 * 5 = 625)

function productOfArray(arr) {

}

module.exports = productOfArray;

// ตัวอย่างการใช้งาน:
console.log(productOfArray([1, 2, 3, 4])); // ผลลัพธ์: 24
console.log(productOfArray([5, 5, 5, 5])); // ผลลัพธ์: 625
console.log(productOfArray([2, 4, 6]));    // ผลลัพธ์: 48
console.log(productOfArray([10]));         // ผลลัพธ์: 10
console.log(productOfArray([]));           // ผลลัพธ์: 1