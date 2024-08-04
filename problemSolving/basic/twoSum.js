// คำสั่งทดสอบ npm run test
// โจทย์:
// ให้ array ของตัวเลขจำนวนเต็ม nums และค่าเป้าหมาย target 
// ให้หาดัชนีของสองตัวเลขที่รวมกันได้ค่า target โดยสมมติว่ามีวิธีแก้ปัญหาเพียงหนึ่งวิธี
//  และไม่สามารถใช้ตัวเลขเดิมสองครั้งได้
// Input: nums = [2, 7, 11, 15], target = 9
// Output: [0, 1]
// คำอธิบาย: เนื่องจาก nums[0] + nums[1] == 9 เราจึงคืนค่า [0, 1]


function twoSum(nums, target) {
  // code here
}
module.exports = twoSum;


// ตัวอย่างที่ 1
const nums1 = [2, 7, 11, 15];
const target1 = 9;
console.log(twoSum(nums1, target1)); // Output: [0, 1]

// ตัวอย่างที่ 2
const nums2 = [3, 2, 4];
const target2 = 6;
console.log(twoSum(nums2, target2)); // Output: [1, 2]