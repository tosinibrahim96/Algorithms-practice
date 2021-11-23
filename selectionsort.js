let selectionSort = (array)=>{
  
  let minIndex = 0;

  for (let i = 0; i < array.length; i++) {
    for (let j = i+1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    if (i != minIndex) {
      let temp = array[i];
      array[i] = array[minIndex];
      array[minIndex] = temp;
    }
  }

  return array;
}

console.log(selectionSort([7,6,5]));
