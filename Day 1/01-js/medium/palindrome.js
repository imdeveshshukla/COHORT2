/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase();
  str = str.replaceAll(' ','');
  str = str.replaceAll(',','');
  str = str.replaceAll('!','');
  str = str.replaceAll('.','');
  str = str.replaceAll('?','');
  let l = str.length;

  let k = l-1;
  for (let i = 0; i < l/2; i++) {
    if(str.charAt(i) != str.charAt(k))
      return false;
    k--;
  }
  return true;
}

module.exports = isPalindrome;
