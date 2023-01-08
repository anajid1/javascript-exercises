const palindromes = function (str) {
  str = str.toLowerCase();
  str = removePunctuation(str);

  const reverseStr = reverseString(str);

  console.log("str = " + str);
  console.log("reverseStr = " + reverseStr);

  return str === reverseStr;
};

function removePunctuation(str) {
  var cleanStr = "";

  const punctuation = [
    '.', '?', '!', ',', ':', ';', '-', '—', '[', ']', 
    '{', '}', '(', ')', '\'', '\"', '…', ' '
  ];

  for (var i = 0; i < str.length; i++) {
    if (!punctuation.includes(str.charAt(i)))
      cleanStr += str.charAt(i);
  }

  return cleanStr;
}

function reverseString(str) {
  var reverseStr = "";

  for (var i = str.length; i >= 0; i--)
    reverseStr += str.charAt(i);

  return reverseStr;
}

// Do not edit below this line
module.exports = palindromes;
