
// โจทย์:
// ให้เขียนฟังก์ชันที่รับค่า array ของความสูงของ container และคืนค่า area ของน้ำที่มากที่สุดที่ container สามารถกักได้
//
// Input: heights คือ array ของความสูงของ container
// Output: area ของน้ำที่มากที่สุดที่ container สามารถกักได้
//
// ตัวอย่าง Input และ Output:
// Input: heights = [1,8,6,2,5,4,8,3,7]
// Output: 49
//
// Input: heights = [1,1]
// Output: 1

function maxArea(heights) {
  let maxArea = 0;
  let left = 0;
  let right = heights.length - 1;

  while (left < right) {
    const width = right - left;
    const height = Math.min(heights[left], heights[right]);
    const area = width * height;
    maxArea = Math.max(maxArea, area);

    if (heights[left] < heights[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
}

module.exports = maxArea;

// ตัวอย่างที่ 1
const heights1 = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxArea(heights1)); // Output: 49

// ตัวอย่างที่ 2
const heights2 = [1, 1];
console.log(maxArea(heights2)); // Output: 1