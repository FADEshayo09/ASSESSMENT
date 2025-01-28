document.addEventListener("DOMContentLoaded", function() {
    // Select all cart items
    const cartItems = document.querySelectorAll(".cart-item");
    
    // Calculate and update total price
    function updateTotalPrice() {
      let total = 0;
      cartItems.forEach(item => {
        const price = parseFloat(item.querySelector(".item-price").textContent.replace('$', ''));
        const quantity = parseInt(item.querySelector(".item-quantity").textContent);
        total += price * quantity;
      });
      document.getElementById("total").textContent = total.toFixed(2);
    }
    
    // Increase quantity
    cartItems.forEach(item => {
      const increaseButton = item.querySelector(".increase-btn");
      const decreaseButton = item.querySelector(".decrease-btn");
      const quantitySpan = item.querySelector(".item-quantity");
      
      increaseButton.addEventListener("click", () => {
        let quantity = parseInt(quantitySpan.textContent);
        quantitySpan.textContent = quantity + 1;
        updateTotalPrice();
      });
      
      decreaseButton.addEventListener("click", () => {
        let quantity = parseInt(quantitySpan.textContent);
        if (quantity > 1) {
          quantitySpan.textContent = quantity - 1;
          updateTotalPrice();
        }
      });
    });
    
    // Delete item
    cartItems.forEach(item => {
      const deleteButton = item.querySelector(".delete-btn");
      
      deleteButton.addEventListener("click", () => {
        item.remove();
        updateTotalPrice();
      });
    });
    
    // Like item
    cartItems.forEach(item => {
      const likeButton = item.querySelector(".like-btn");
      
      likeButton.addEventListener("click", () => {
        likeButton.classList.toggle("liked");
      });
    });
    
    // Initial total price update
    updateTotalPrice();
  });
  