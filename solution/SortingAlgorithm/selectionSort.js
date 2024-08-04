// โจทย์:
// ให้เขียนฟังก์ชันที่เรียงลำดับ array ของตัวเลขโดยใช้วิธี Selection Sort
//
// Input: arr คือ array ของจำนวนเต็ม
// Output: array ที่ถูกเรียงลำดับจากน้อยไปมาก
//
// ตัวอย่าง Input และ Output:
// Input: arr = [3, 6, 8, 10, 1, 2, 1]
// Output: [1, 1, 2, 3, 6, 8, 10]

function selectionSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      // สลับตำแหน่ง
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  return arr;
}



// ตัวอย่างที่ 1
const arr1 = [3, 6, 8, 10, 1, 2, 1];
console.log(selectionSort(arr1)); // Output: [1, 1, 2, 3, 6, 8, 10]

// ตัวอย่างที่ 2
const arr2 = [10, 7, 8, 9, 1, 5];
console.log(selectionSort(arr2)); // Output: [1, 5, 7, 8, 9, 10]