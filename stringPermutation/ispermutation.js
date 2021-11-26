/**
 * 
 * Approach 1
 */

// const sortString = (str)=>{
//   return str.split("").sort().join("");
// }


// const isPermutation = (str1, str2) => {
//   if (str1.length != str2.length) {
//     return false;
//   }

//   if (sortString(str1) !== sortString(str2)) {
//     return false;
//   }

//   return true;
// };


/**
 * 
 * Approach 2
 */

 const createStringMap = (str)=>{
  let strMap = new Map();
  for(char of str){
    let currentValue = strMap.get(char);
    if (!currentValue) {
      strMap.set(char,1);
    }else{
      let newValue = currentValue + 1;
      strMap.set(char, newValue);
    }
  }

  return strMap;
}


// const isPermutation = (str1, str2) => {
//   if (str1.length != str2.length) {
//     return false;
//   }

//   let str1Map = createStringMap(str1);
//   let str2Map = createStringMap(str2);

//   for(const[key] of str1Map){
//     if (str2Map.get(key) != str1Map.get(key)) {
//       return false;
//     }
//   }

//   return true;
// };


const isPermutation = (str1, str2) => {
  if (str1.length != str2.length) {
    return false;
  }

  let str1Map = createStringMap(str1);

  for(char of str2){
    let value = str1Map.get(char);
    if (typeof value == 'undefined') {
      return false;
    }

    let newValue = value-1;
    if (newValue < 0) {
      return false;
    }else{
      str1Map.set(char,newValue);
    }
  }

  return true;
};


console.log(isPermutation("coconut","coconot"));
console.log(isPermutation("pat","tap"));
console.log(isPermutation("apple","orang"));
console.log(isPermutation("potato","totapo"));
