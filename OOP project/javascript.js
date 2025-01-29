class Product {
    constructor(id, name, price) {
      this.id = id;
      this.name = name;
      this.price = price;
    }
  }
  class ShoppingCartItem {
    constructor(product, quantity) {
      this.product = product;
      this.quantity = quantity;
    }
  
    // Method to calculate the total price of the item
    getTotalPrice() {
      return this.product.price * this.quantity;
    }
  }
  class ShoppingCart {
    constructor() {
      this.items = [];
    }
  
    // Method to add an item to the cart
    addItem(product, quantity) {
      // Check if the product already exists in the cart
      let existingItem = this.items.find(item => item.product.id === product.id);
      if (existingItem) {
        // If product exists, increase the quantity
        existingItem.quantity += quantity;
      } else {
        // If product doesn't exist, add a new ShoppingCartItem
        this.items.push(new ShoppingCartItem(product, quantity));
      }
    }
  
    // Method to remove an item from the cart
    removeItem(productId) {
      // Remove item by matching the product id
      this.items = this.items.filter(item => item.product.id !== productId);
    }
  
    // Method to get the total price of items in the cart
    getTotal() {
      return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
    }
  
    // Method to display cart items
    displayItems() {
      if (this.items.length === 0) {
        console.log("The cart is empty.");
        return;
      }
      console.log("Shopping Cart:");
      this.items.forEach(item => {
        console.log(`${item.product.name} (x${item.quantity}) - $${item.getTotalPrice()}`);
      });
    }
  }
// Create some products
const product1 = new Product(1, "Laptop", 1200);
const product2 = new Product(2, "Phone", 800);
const product3 = new Product(3, "Headphones", 150);

// Create a shopping cart
const cart = new ShoppingCart();

// Add items to the cart
cart.addItem(product1, 1);  // 1 Laptop
cart.addItem(product2, 2);  // 2 Phones
cart.addItem(product3, 3);  // 3 Headphones

// Display the cart
cart.displayItems();

// Get the total price of the cart
console.log(`Total Price: $${cart.getTotal()}`);

// Remove an item from the cart (e.g., removing Phone)
cart.removeItem(2);  // Remove product with id 2 (Phone)

// Display the cart again
cart.displayItems();

// Get the updated total price
console.log(`Total Price after removal: $${cart.getTotal()}`);

    