function insertionSort(arr) {
    // Loop through the array starting from the second element
    for (let i = 1; i < arr.length; i++) {
        // Pick the element to be inserted
        let currentElement = arr[i];
        // Initialize the position to compare with the previous element
        let j = i - 1;
        
        // Shift elements of arr[0..i-1], that are greater than currentElement, 
        // to one position ahead of their current position
        while (j >= 0 && arr[j] > currentElement) {
            arr[j + 1] = arr[j]; // Move the element to the right
            j--; // Move to the next element to the left
        }

        // Insert the currentElement into the correct position
        arr[j + 1] = currentElement;
    }
    return arr;
}

// Example usage
let arr = [5, 2, 9, 1, 5, 6];
console.log("Sorted Array:", insertionSort(arr));