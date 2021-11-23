// const sortString = (str) => {
//   return str.split('')
//   .sort()
//   .join('');
// }

// const isPermutation = (str1, str2)=>{
//   if (str1.length !== str2.length) {
//     return false;
//   }

//   return sortString(str1) === sortString(str2);
// } 

const isPermutation = (str1, str2)=>{

  if (str1.length != str2.length) {
    return false;
  }

  let lettersMap = new Map();
  str1Array = str1.split('');
  str2Array = str2.split('');


  for (let index = 0; index < str1Array.length; index++) {
    
    if (!lettersMap.get(str1Array[index])) {
      lettersMap.set(str1Array[index], 1);
      continue;
    }
    
    let key = str1Array[index];
    let value = lettersMap.get(str1Array[index]);
    lettersMap.set(key,++value);
  }

  for (let index = 0; index < str2Array.length; index++) {
    
    let key = str2Array[index];
    let value = lettersMap.get(key);
    lettersMap.set(key,--value);
    
    if (isNaN(value) || value<0 ) {
      console.log(lettersMap)
       return false;
    }

    
  }

  console.log(lettersMap);
  return true;
}

console.log(isPermutation('abcba','cbbzc'));