const isUnique = (str)=>{
  for (let i = 0; i < str.length; i++) {
    for (let j = i+1; j < str.length; j++) {
      if (str.charAt(i) == str.charAt(j)) {
        return false;
      }
    }
  }

  return true;
}


console.log(isUnique('coconut'));
console.log(isUnique('pat'));
console.log(isUnique('apple'));

module.exports = isUnique;
