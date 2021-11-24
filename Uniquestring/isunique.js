/***
 * Approach 1
 */
// const isUnique = (str)=>{
//   for (let i = 0; i < str.length; i++) {
//     for (let j = i+1; j < str.length; j++) {
//       if (str.charAt(i) == str.charAt(j)) {
//         return false;
//       }
//     }
//   }

//   return true;
// }

/***
 * Approach 2
 * For of can also be used here
 */
// const isUnique = (str) => {
//   const strMap = new Map();
//   for (let i = 0; i < str.length; i++) {
//     let key = strMap.get(str.charAt(i));
//     if (!key) {
//       strMap.set(str.charAt(i), true);
//     } else {
//       return false;
//     }
//   }

//   return true;
// };


/***
 * Approach 3
 */
const isUnique = (str)=>{
  let sortedStr = str.split('').sort();

  for (let i = 0; i < sortedStr.length; i++) {
    if (sortedStr[i] == sortedStr[i+1]) {
      return false;
    }
  }

  return true;
}
console.log(isUnique("coconut"));
console.log(isUnique("pat"));
console.log(isUnique("apple"));

module.exports = isUnique;
