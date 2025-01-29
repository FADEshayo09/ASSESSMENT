
//1. Leap Year Checker
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return `${year} is a leap year.`;
    } else {
        return `${year} is not a leap year.`;
    }
}

console.log(isLeapYear(2024));  // Output: 2024 is a leap year.
console.log(isLeapYear(2023));  // Output: 2023 is not a leap year.

//2. Ticket Pricing
function getTicketPrice(age) {
    if (age <= 12) {
        return "Ticket price: $10 (Child)";
    } else if (age >= 13 && age <= 17) {
        return "Ticket price: $15 (Teenager)";
    } else {
        return "Ticket price: $20 (Adult)";
    }
}

console.log(getTicketPrice(10));  // Output: Ticket price: $10 (Child)
console.log(getTicketPrice(15));  // Output: Ticket price: $15 (Teenager)
console.log(getTicketPrice(30));  // Output: Ticket price: $20 (Adult)



//3. Weather Clothing Adviser
function clothingAdviser() {
    // Get the current temperature from the user
    let temperature = parseInt(prompt("Enter the current temperature (in Celsius):"));
    
    // Get whether it's raining or not from the user
    let isRaining = prompt("Is it raining? (yes or no)").toLowerCase();

    // Weather clothing advice
    if (temperature <= 10) {
        if (isRaining === "yes") {
            console.log("It's cold and rainy. Wear a warm coat and carry an umbrella!");
        } else {
            console.log("It's cold. Wear a warm coat and scarf.");
        }
    } else if (temperature > 10 && temperature <= 20) {
        if (isRaining === "yes") {
            console.log("It's a bit chilly and rainy. Wear a light jacket and bring an umbrella.");
        } else {
            console.log("It's mild. A jacket should be enough.");
        }
    } else if (temperature > 20 && temperature <= 30) {
        if (isRaining === "yes") {
            console.log("It's warm but rainy. Wear a light shirt and carry an umbrella.");
        } else {
            console.log("It's warm. Wear a t-shirt and comfortable pants.");
        }
    } else {
        if (isRaining === "yes") {
            console.log("It's hot but rainy. Wear a light t-shirt, shorts, and carry an umbrella.");
        } else {
            console.log("It's hot! Wear light clothing like shorts and a t-shirt.");
        }
    }
}

// Call the function to run the program
clothingAdviser();

//Recursion
//1. Fibonacci Sequence
function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

console.log(fibonacci(6));  // Output: 8
console.log(fibonacci(10)); // Output: 55


//2. Palindrome Checker
function isPalindrome(str) {
    // Remove spaces and convert to lowercase for uniformity
    str = str.replace(/\s+/g, '').toLowerCase();
    
    if (str.length <= 1) {
        return true;  // A single character or empty string is a palindrome
    } else {
        if (str[0] === str[str.length - 1]) {
            // Recursively check the substring without the first and last characters
            return isPalindrome(str.slice(1, str.length - 1));
        } else {
            return false;
        }
    }
}

console.log(isPalindrome("A man a plan a canal Panama"));  // Output: true
console.log(isPalindrome("hello"));  // Output: false
