// npm run editDistance
// โจทย์:
// ให้เขียนฟังก์ชันที่หาค่า Edit Distance ระหว่างสตริงสองสตริง
//
// Input: str1 และ str2 คือสตริงสองตัว
// Output: จำนวนครั้งของการแทรก, ลบ หรือ แก้ไข ที่ต้องทำให้ str1 กลายเป็น str2
//
// ตัวอย่าง Input และ Output:
// Input: str1 = "kitten", str2 = "sitting"
// Output: 3 (ต้องลบ t, แทรก i, และ แก้ไข e เป็น g)

function editDistance(str1, str2) {

}

module.exports = editDistance;

// ตัวอย่างการใช้งาน:
const str1 = "kitten";
const str2 = "sitting";
console.log(editDistance(str1, str2)); // ผลลัพธ์: 3

const str3 = "flaw";
const str4 = "lawn";
console.log(editDistance(str3, str4)); // ผลลัพธ์: 2

const str5 = "intention";
const str6 = "execution";
console.log(editDistance(str5, str6)); // ผลลัพธ์: 5