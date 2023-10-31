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
      if (index === digits.length) {
          if (currentCombination.length > 0) {
              combinations.push(currentCombination);
          }
          return;
      }

      const digit = digits[index];
      const letters = digitLetters[digit];

      for (let i = 0; i < letters.length; i++) {
          backtrack(index + 1, currentCombination + letters[i]);
      }
  }

  const combinations = [];
  if (digits) {
      backtrack(0, '');
  }
  return combinations;
}

// Example usage:
console.log(letterCombinations("23")); // Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
console.log(letterCombinations("")); // Output: []
console.log(letterCombinations("2")); // Output: ["a","b","c"]
