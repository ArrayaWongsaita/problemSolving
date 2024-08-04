// npm run factorial
// โจทย์:
// ให้เขียนฟังก์ชันที่หาค่า factorial ของตัวเลข n โดยใช้ recursion
//
// Input: n คือจำนวนเต็มบวก
// Output: ค่า factorial ของ n
//
// ตัวอย่าง Input และ Output:
// Input: n = 5
// Output: 120 (5! = 5 * 4 * 3 * 2 * 1 = 120)

function factorial(n) {
  if (n < 0) throw new Error("n must be a non-negative integer");
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

module.exports = factorial;

// ตัวอย่างการใช้งาน:
console.log(factorial(5)); // ผลลัพธ์: 120
console.log(factorial(0)); // ผลลัพธ์: 1
console.log(factorial(10)); // ผลลัพธ์: 3628800