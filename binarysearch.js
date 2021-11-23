let binarySearch = (inputArr, searchValue)=>{
  let startIndex = 0;
  let endIndex = inputArr.length-1;
  while (startIndex <= endIndex) {
    let middleIndex = Math.floor((startIndex+endIndex)/2);
    if (inputArr[middleIndex] == searchValue) {
      return middleIndex;
    }
    if (inputArr[middleIndex] < searchValue) {
      startIndex = middleIndex+=1;
    }
    if (inputArr[middleIndex] > searchValue) {
      endIndex = middleIndex-=1;
    }
  }
  return -1;
}

console.log(binarySearch([1,2,3,4,5,6,7], 7));
