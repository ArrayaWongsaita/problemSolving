// โจทย์:
// ให้เขียนฟังก์ชันที่หาความยาวของ string โดยใช้ recursion
//
// Input: str คือสตริง
// Output: ความยาวของสตริง
//
// ตัวอย่าง Input และ Output:
// Input: str = "hello"
// Output: 5
//
// Input: str = ""
// Output: 0

function stringLength(str) {
  if (str === "") return 0;
  return 1 + stringLength(str.slice(1));
}



// ตัวอย่างการใช้งาน:
console.log(stringLength("hello")); // ผลลัพธ์: 5
console.log(stringLength(""));      // ผลลัพธ์: 0
console.log(stringLength("OpenAI")); // ผลลัพธ์: 6