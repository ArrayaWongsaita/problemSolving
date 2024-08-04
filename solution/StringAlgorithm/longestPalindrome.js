// โจทย์:
// ให้เขียนฟังก์ชันที่รับค่าสตริงและคืนค่าส่วนที่ยาวที่สุดที่เป็น palindrome ในสตริงนั้น
//
// Input: s คือสตริง
// Output: ส่วนของสตริงที่ยาวที่สุดที่เป็น palindrome
//
// ตัวอย่าง Input และ Output:
// Input: s = "babad"
// Output: "bab" หรือ "aba"
//
// Input: s = "cbbd"
// Output: "bb"

function longestPalindrome(s) {
  if (s.length < 2) return s;
  let start = 0, maxLength = 1;
  
  function expandAroundCenter(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      const currentLength = right - left + 1;
      if (currentLength > maxLength) {
        start = left;
        maxLength = currentLength;
      }
      left--;
      right++;
    }
  }

  for (let i = 0; i < s.length; i++) {
    expandAroundCenter(i - 1, i + 1);  // สำหรับ palindrome ความยาวคี่
    expandAroundCenter(i, i + 1);      // สำหรับ palindrome ความยาวคู่
  }

  return s.substring(start, start + maxLength);
}



// ตัวอย่างการใช้งาน:
const s1 = "babad";
console.log(longestPalindrome(s1)); // ผลลัพธ์: "bab" หรือ "aba"

const s2 = "cbbd";
console.log(longestPalindrome(s2)); // ผลลัพธ์: "bb"

const s3 = "a";
console.log(longestPalindrome(s3)); // ผลลัพธ์: "a"

const s4 = "ac";
console.log(longestPalindrome(s4)); // ผลลัพธ์: "a" หรือ "c"

const s5 = "racecar";
console.log(longestPalindrome(s5)); // ผลลัพธ์: "racecar"