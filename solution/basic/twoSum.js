// คำสั่งทดสอบ npm run test

function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];
      if (map.has(complement)) {
          return [map.get(complement), i];
      }
      map.set(nums[i], i);
  }
  throw new Error('ไม่มีวิธีแก้ปัญหา');
}



// ตัวอย่างที่ 1
const nums1 = [2, 7, 11, 15];
const target1 = 9;
console.log(twoSum(nums1, target1)); // Output: [0, 1]

// ตัวอย่างที่ 2
const nums2 = [3, 2, 4];
const target2 = 6;
console.log(twoSum(nums2, target2)); // Output: [1, 2]