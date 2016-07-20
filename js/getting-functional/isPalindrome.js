// isPalindrome(string)
// Checks if a string is a palindrome, and returns true or false

// Example Input

// var str = 'racecar';

var checkPalindrome = function Palindrome(string) {
  return string.toLowerCase() == string.split('').reverse().join('').toLowerCase();
}

checkPalindrome('desserts');

// Example Output

// false
