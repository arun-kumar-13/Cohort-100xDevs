/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
    str = str.replace(/[^A-Za-z0-9]/g,"").toLowerCase();
    for(let i=0;i<str.length/2;i++)
    {
      if(str.charAt(i) !=str.charAt(str.length-i-1))
      {
        return false;
      }
    }
    return true;
}

module.exports = isPalindrome;
