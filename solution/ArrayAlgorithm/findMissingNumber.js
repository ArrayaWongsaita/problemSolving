// โจทย์:
// ให้เขียนฟังก์ชันที่หาค่าที่หายไปใน array ของจำนวนเต็มที่เรียงลำดับจาก 1 ถึง n
//
// Input: arr คือ array ของจำนวนเต็มที่มีค่าตั้งแต่ 1 ถึง n โดยมีค่าหนึ่งที่หายไป
// Output: ค่าที่หายไปใน array นั้น
//
// ตัวอย่าง Input และ Output:
// Input: arr = [1, 2, 4, 5, 6]
// Output: 3 (ค่าที่หายไปคือ 3)

function findMissingNumber(arr) {
  const n = arr.length + 1;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = arr.reduce((sum, num) => sum + num, 0);
  return expectedSum - actualSum;
}



// ตัวอย่างการใช้งาน:
const arr1 = [1, 2, 4, 5, 6];
console.log(findMissingNumber(arr1)); // ผลลัพธ์: 3

const arr2 = [3, 7, 1, 2, 8, 4, 5];
console.log(findMissingNumber(arr2)); // ผลลัพธ์: 6

const arr3 = [1, 2];
console.log(findMissingNumber(arr3)); // ผลลัพธ์: 3

const arr4 = [2, 3, 4, 5, 6];
console.log(findMissingNumber(arr4)); // ผลลัพธ์: 1

const arr5 = [1];
console.log(findMissingNumber(arr5)); // ผลลัพธ์: 2