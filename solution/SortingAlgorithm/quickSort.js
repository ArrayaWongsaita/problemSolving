// โจทย์:
// ให้เขียนฟังก์ชันที่เรียงลำดับ array ของตัวเลขโดยใช้วิธี QuickSort
//
// Input: arr คือ array ของจำนวนเต็ม
// Output: array ที่ถูกเรียงลำดับจากน้อยไปมาก
//
// ตัวอย่าง Input และ Output:
// Input: arr = [3, 6, 8, 10, 1, 2, 1]
// Output: [1, 1, 2, 3, 6, 8, 10]

function quickSort(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
    const pivotIndex = partition(arr, low, high);
    quickSort(arr, low, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, high);
  }
  return arr;
}

function partition(arr, low, high) {
  const pivot = arr[high];
  let i = low - 1;

  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1;
}



// ตัวอย่างที่ 1
const arr1 = [3, 6, 8, 10, 1, 2, 1];
console.log(quickSort(arr1)); // Output: [1, 1, 2, 3, 6, 8, 10]

// ตัวอย่างที่ 2
const arr2 = [10, 7, 8, 9, 1, 5];
console.log(quickSort(arr2)); // Output: [1, 5, 7, 8, 9, 10]