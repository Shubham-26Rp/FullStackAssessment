var fullWordList = ['1','2','3','4','5'];
var wordsToRemove = ['1','2','3'];

var filteredKeywords = fullWordList.filter((word) => !wordsToRemove.includes(word));

console.log(filteredKeywords);