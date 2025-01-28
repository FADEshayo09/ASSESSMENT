// String Manipulation Functions:

// Reverse a String:
function reverseString(str) {
    return str.split('').reverse().join('');
  }
  console.log(reverseString("hello")); // Output: "olleh"
  
  // Count Characters:
  function countCharacters(str) {
    return str.length;
  }
  console.log(countCharacters("hello")); // Output: 5
  
  // Capitalize Words:
  function capitalizeWords(sentence) {
    return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }
  console.log(capitalizeWords("hello world")); // Output: "Hello World"
  
  
  // Array Functions:
  
  // Find Maximum:
  function findMaximum(arr) {
    return Math.max(...arr);
  }
  console.log(findMaximum([1, 2, 3, 4, 5])); // Output: 5
  
  // Find Minimum:
  function findMinimum(arr) {
    return Math.min(...arr);
  }
  console.log(findMinimum([1, 2, 3, 4, 5])); // Output: 1
  
  // Sum of Array:
  function sumOfArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
  }
  console.log(sumOfArray([1, 2, 3, 4, 5])); // Output: 15
  
  // Filter Array:
  function filterArray(arr, condition) {
    return arr.filter(condition);
  }
  console.log(filterArray([1, 2, 3, 4, 5], num => num > 2)); // Output: [3, 4, 5]
  
  
  // Mathematical Functions:
  
  // Factorial:
  function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
  }
  console.log(factorial(5)); // Output: 120
  
  // Prime Number Check:
  function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  console.log(isPrime(7)); // Output: true
  console.log(isPrime(4)); // Output: false
  
  // Fibonacci Sequence:
  function fibonacciSequence(n) {
    let sequence = [0, 1];
    for (let i = 2; i < n; i++) {
      sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence.slice(0, n);
  }
  console.log(fibonacciSequence(5)); // Output: [0, 1, 1, 2, 3]
  