const buildCharacterFrequencyTable = (str) => {
  let strMap = new Map();
  str = str.toLowerCase();

  let oddCharactersCount = 0;

  for (char of str) {
    
    if (char == " ") {
      strMap.set(char, 0);
      continue;
    }
    
    let value = strMap.get(char);
    
    if (typeof value == "undefined") {
      strMap.set(char, 1);
      oddCharactersCount +=1;
      continue;
    }

    value += 1;
    strMap.set(char, value);
    if (value % 2 != 0) {
      oddCharactersCount += 1;
    }else{
      oddCharactersCount -=1
    }
    
  }
  
  return oddCharactersCount <= 1;
};

// const getOddCharactersCount = (charcterFrequencyTable)=>{
//   let oddCharactersCount = 0;
//   for ([key, value] of charcterFrequencyTable) {
//     if (value % 2 != 0) {
//       oddCharactersCount += 1;
//     }
//   }

//   return oddCharactersCount;
// }


// const palindromePermutation = (str) => {
//   let charcterFrequencyTable = buildCharacterFrequencyTable(str);
//   return getOddCharactersCount(charcterFrequencyTable) <= 1;
// };


const palindromePermutation = (str) => {
  let charcterFrequencyTable = buildCharacterFrequencyTable(str);
  return getOddCharactersCount(charcterFrequencyTable) <= 1;
};

console.log(palindromePermutation("Tact   Coa"));
