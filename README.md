# promo-texter
A simple REST API for promotexter exam

`Letter Combination`

1. run `node letter-combination.js`

`REST API`

1. run `npm test` to view the test results
2. Code written inside the app.js

This code defines a function letterCombinations that takes a string of digits as input and returns an array of all possible letter combinations corresponding to those digits using a telephone keypad layout. Let's break down each part of the code:

const digitLetters = { ... }: This object maps each digit (2 to 9) to the letters associated with it on a telephone keypad.

function backtrack(index, currentCombination) { ... }: This is a recursive function that generates the letter combinations. It takes two parameters:

index: The current index in the digits string.
currentCombination: The current letter combination being constructed.
Inside the backtrack function:

if (index === digits.length) { ... }: This condition checks if we have processed all the digits in the input. If so, it means we have generated a complete combination, and it's added to the combinations array.

const digit = digits[index];: It retrieves the current digit from the digits string.

const letters = digitLetters[digit];: It fetches the corresponding letters associated with the current digit from the digitLetters object.

for (let i = 0; i < letters.length; i++) { ... }: This loop iterates through the letters associated with the current digit and recursively calls the backtrack function with the next digit and an updated currentCombination.

const combinations = [];: This initializes an array to store the letter combinations.

if (digits) { ... }: It checks if the digits input is not an empty string. If it's not empty, the backtrack function is called to start generating combinations.

return combinations;: The function returns the combinations array, which contains all the generated letter combinations.

Example Usage:

console.log(letterCombinations("23"));: It calls the function with the input "23" and prints the resulting letter combinations, which are ["ad","ae","af","bd","be","bf","cd","ce","cf"].

console.log(letterCombinations(""));: It calls the function with an empty string as input and returns an empty array because there are no digits to generate combinations for.

console.log(letterCombinations("2"));: It calls the function with the input "2" and returns ["a","b","c"] since "2" corresponds to the letters "abc" on a telephone keypad, and all possible combinations are generated.
