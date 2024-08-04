// npm run anagramCheck
// โจทย์:
// ให้เขียนฟังก์ชันที่รับค่า string สองตัว และคืนค่า boolean ว่า string สองตัวนี้เป็น anagram กันหรือไม่
//
// Input: str1, str2 คือ string สองตัว
// Output: boolean ที่บอกว่า str1 และ str2 เป็น anagram กันหรือไม่
//
// ตัวอย่าง Input และ Output:
// Input: str1 = "listen", str2 = "silent"
// Output: true
//
// Input: str1 = "hello", str2 = "world"
// Output: false

function anagramCheck(str1, str2) {

}

module.exports = anagramCheck;

// ตัวอย่างที่ 1
const str1 = "listen";
const str2 = "silent";
console.log(anagramCheck(str1, str2)); // Output: true

// ตัวอย่างที่ 2
const str3 = "hello";
const str4 = "world";
console.log(anagramCheck(str3, str4)); // Output: false