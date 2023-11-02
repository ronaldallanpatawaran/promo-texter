function letterCombinations(digits) {
  const digitLetters = {
      '2': 'abc',
      '3': 'def',
      '4': 'ghi',
      '5': 'jkl',
      '6': 'mno',
      '7': 'pqrs',
      '8': 'tuv',
      '9': 'wxyz',
  };

    function backtrack(index, currentCombination) {
      if (index === digits.length) { // if the current index will be equal to digits.length, the recursive call will stop and will return the output.
          if (currentCombination.length > 0) {
              combinations.push(currentCombination);
          }
          return;
      }

      const digit = digits[index]; // current letter of the parameter digits, this digits is a string
      const letters = digitLetters[digit]; // current set of letters depending on the selected or current digit of inputted parameters ( digits )

      for (let i = 0; i < letters.length; i++) { // it will loop the current set of letters then it will call itself using recursive method, adding the index + 1 to get the next set of letters
          backtrack(index + 1, currentCombination + letters[i]);
      }
  }

  const combinations = [];
  if (digits) { // it will run only if the digits is not undefined
      backtrack(0, '');
  }
  return combinations;
}

// Example usage:
console.log(letterCombinations("234")); // Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
console.log(letterCombinations("")); // Output: []
console.log(letterCombinations("2")); // Output: ["a","b","c"]
