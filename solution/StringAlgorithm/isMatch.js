// โจทย์:
// ให้เขียนฟังก์ชันที่รับค่าสตริง text และ pattern และคืนค่า boolean ว่า text ตรงกับ pattern หรือไม่
// โดยที่ pattern สามารถมี wildcard '*' (แทนชุดของตัวอักษรใด ๆ) และ '?' (แทนตัวอักษรใด ๆ หนึ่งตัว)
//
// Input: text คือสตริง, pattern คือสตริงที่มี wildcard
// Output: boolean ที่บอกว่า text ตรงกับ pattern หรือไม่
//
// ตัวอย่าง Input และ Output:
// Input: text = "aa", pattern = "a"
// Output: false
//
// Input: text = "aa", pattern = "*"
// Output: true
//
// Input: text = "cb", pattern = "?a"
// Output: false

function isMatch(text, pattern) {
  const dp = Array(text.length + 1).fill().map(() => Array(pattern.length + 1).fill(false));
  dp[0][0] = true;

  for (let j = 1; j <= pattern.length; j++) {
    if (pattern[j - 1] === '*') {
      dp[0][j] = dp[0][j - 1];
    }
  }

  for (let i = 1; i <= text.length; i++) {
    for (let j = 1; j <= pattern.length; j++) {
      if (pattern[j - 1] === '*') {
        dp[i][j] = dp[i][j - 1] || dp[i - 1][j];
      } else if (pattern[j - 1] === '?' || text[i - 1] === pattern[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      }
    }
  }

  return dp[text.length][pattern.length];
}



// ตัวอย่างการใช้งาน:
const text1 = "aa";
const pattern1 = "a";
console.log(isMatch(text1, pattern1)); // ผลลัพธ์: false

const text2 = "aa";
const pattern2 = "*";
console.log(isMatch(text2, pattern2)); // ผลลัพธ์: true

const text3 = "cb";
const pattern3 = "?a";
console.log(isMatch(text3, pattern3)); // ผลลัพธ์: false

const text4 = "adceb";
const pattern4 = "*a*b";
console.log(isMatch(text4, pattern4)); // ผลลัพธ์: true

const text5 = "acdcb";
const pattern5 = "a*c?b";
console.log(isMatch(text5, pattern5)); // ผลลัพธ์: false