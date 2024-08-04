// โจทย์:
// ให้เขียนฟังก์ชันที่เรียงลำดับ array ของตัวเลขโดยใช้วิธี Bubble Sort
//
// Input: arr คือ array ของจำนวนเต็ม
// Output: array ที่ถูกเรียงลำดับจากน้อยไปมาก
//
// ตัวอย่าง Input และ Output:
// Input: arr = [3, 6, 8, 10, 1, 2, 1]
// Output: [1, 1, 2, 3, 6, 8, 10]

function bubbleSort(arr) {
  const n = arr.length;
  let swapped;

  for (let i = 0; i < n - 1; i++) {
    swapped = false;
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // สลับตำแหน่ง
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }

    // ถ้าไม่มีการสลับตำแหน่งในรอบนี้ แสดงว่าเรียงลำดับเสร็จแล้ว
    if (!swapped) break;
  }

  return arr;
}



// ตัวอย่างที่ 1
const arr1 = [3, 6, 8, 10, 1, 2, 1];
console.log(bubbleSort(arr1)); // Output: [1, 1, 2, 3, 6, 8, 10]

// ตัวอย่างที่ 2
const arr2 = [10, 7, 8, 9, 1, 5];
console.log(bubbleSort(arr2)); // Output: [1, 5, 7, 8, 9, 10]