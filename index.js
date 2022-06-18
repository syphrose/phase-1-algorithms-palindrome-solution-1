function reversedString(word) {
  return word.split("").reverse().join("");
}

function isPalindrome(word) {
  // reverse the input string
  const reversedWord = reversedString(word);
  // comparison between the reversed string and the input
  return word === reversedWord
}
 
//for reverse input string;
  //if the function input is similar as the reversed input
     //return true
  //else
     //return false


// You can run `node index.js` to view these console logs
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
