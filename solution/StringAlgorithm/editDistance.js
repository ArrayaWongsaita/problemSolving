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
  const m = str1.length;
  const n = str2.length;
  const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0));

  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      if (i === 0) {
        dp[i][j] = j;
      } else if (j === 0) {
        dp[i][j] = i;
      } else if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = 1 + Math.min(
          dp[i - 1][j],    // Remove
          dp[i][j - 1],    // Insert
          dp[i - 1][j - 1] // Replace
        );
      }
    }
  }

  return dp[m][n];
}



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