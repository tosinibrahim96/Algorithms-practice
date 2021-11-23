let reverseString = (str)=>{
  console.log(`str`, str);
  if (str.length == 0) {
    return str;
  }

  return reverseString(str.substr(1)) + str.charAt(0);
}


