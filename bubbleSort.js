/**
 * The main idea behind bubble sort is that the larger values bubble to the right 
 * in the process of of sorting.
 * 
 * For each iteration, 2 values next to each other are compared
 * If the left is greater than the right, then we swap. This continues
 * until everything is swapped
 * 
 * Note. After each runthorugh, the largest number should already be at the end, 
 * so, the last values will be omitted after every bubble
 */

const bubbleSort = (arr)=>{

  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length-i; j++) {
      if (arr[j-1] > arr[j]) {
        let temp = arr[j-1];
        arr[j-1] = arr[j];
        arr[j] = temp;
      }
    }
    
  }

  return arr;
}

console.log(bubbleSort([12,35,76,45,21,4]));
