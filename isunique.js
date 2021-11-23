// const isUnique = (str)=> {
//   for (let i = 0; i < str.length; i++) {
//     for (let j = i+1; j < str.length; j++) {
//       if (str.charAt(i) == str.charAt(j)) {
//         return false;
//       }
//     }
//   }

//   return true;
// }


// const isUnique = (str)=>{
//   let strArray = str.split('');
//   strArray = strArray.sort();

//   for (let index = 0; index < strArray.length; index++) {
//     if (strArray[index] == strArray[index+1]) {
//       return false;
//     }
//   }

//   return true;
// } 


const isUnique = (str)=>{

  const strMap = new Map();
  for (const char of str) {
    console.log(char, strMap.get(char));
    if(strMap.get(char)){
      return false;
    }
    strMap.set(char, true);
  }

  return true;
} 

console.log(isUnique('book'));