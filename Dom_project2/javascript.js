// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function() {
    // Get references to the color box and button
    const colorBox = document.getElementById("color-box");
    const changeColorBtn = document.getElementById("change-color-btn");
  
    // Function to generate a random color
    function getRandomColor() {
      // Generate random RGB values
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      return `rgb(${r}, ${g}, ${b})`; // Return the random color in RGB format
    }
  
    // Event listener for the "Change Color" button
    changeColorBtn.addEventListener("click", function() {
      // Change the background color of the color box to a random color
      colorBox.style.backgroundColor = getRandomColor();
    });
  });
  