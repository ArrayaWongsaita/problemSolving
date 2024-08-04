// โจทย์:
// ให้เขียนฟังก์ชันที่รับค่า array สองชุดที่มีการจัดเรียงแล้ว และคืนค่า array ที่รวมกันและมีการจัดเรียง
//
// Input: arr1, arr2 คือ array ของตัวเลขที่มีการจัดเรียงแล้ว
// Output: array ที่รวมกันและมีการจัดเรียง
//
// ตัวอย่าง Input และ Output:
// Input: arr1 = [1, 3, 5], arr2 = [2, 4, 6]
// Output: [1, 2, 3, 4, 5, 6]
//
// Input: arr1 = [1, 2, 3], arr2 = [4, 5, 6]
// Output: [1, 2, 3, 4, 5, 6]

function mergeSortedArrays(arr1, arr2) {
  let mergedArray = [];
  let i = 0, j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    mergedArray.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    mergedArray.push(arr2[j]);
    j++;
  }

  return mergedArray;
}



// ตัวอย่างที่ 1
const arr1 = [1, 3, 5];
const arr2 = [2, 4, 6];
console.log(mergeSortedArrays(arr1, arr2)); // Output: [1, 2, 3, 4, 5, 6]

// ตัวอย่างที่ 2
const arr3 = [1, 2, 3];
const arr4 = [4, 5, 6];
console.log(mergeSortedArrays(arr3, arr4)); // Output: [1, 2, 3, 4, 5, 6]