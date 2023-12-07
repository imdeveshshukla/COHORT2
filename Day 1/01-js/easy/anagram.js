/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if(str1.length != str2.length)
    return false;
  else{
    let flag = true;
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    for (let i = 0; i < str1.length; i++) {
      const element = str1.charAt(i);
      let f = 0;
      for (let j = 0; j < str2.length; j++) {
        if(element == str2.charAt(j))
        {
          f = 1;
          break;
        }
      }
      if(f == 0)
        flag = false
    }

    return flag
  }
}

module.exports = isAnagram;
