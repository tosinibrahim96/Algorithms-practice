// const URLify = (str)=>{
//   str = str.trim();
//   return str.replaceAll(" ", "%20");
// }


// const URLify = (str, originalLength)=>{

//   let output = '';
//   let originalLengthTracker = 0;
 
//   for (let char of str) {

//     if (originalLengthTracker == originalLength) {
//       return output;
//     }

//     if(char == ' '){
//       char = '%20';
//     }

//     output = `${output}${char}`;
//     originalLengthTracker++;
//   }
  
//   return output;
// }


console.log(URLify("Mr John Smith     ", 13));

