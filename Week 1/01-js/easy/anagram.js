/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
      const formattedStr1 = str1.toLowerCase().replace('/\s/g',"");
      const formattedStr2 = str2.toLowerCase().replace('/\s/g',"");
      if(formattedStr1.length != formattedStr2.length)
      {
        return false;
      }

      const sortStr1 = formattedStr1.split("").sort().join("");
      const sortStr2 = formattedStr2.split("").sort().join("");
      if(sortStr1 == sortStr2)
      {
        return true;
      }
      else
      {
        return false;
      }
}

module.exports = isAnagram;
