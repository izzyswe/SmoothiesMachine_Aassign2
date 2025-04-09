// Smoothie class
class SmoothieIngredient {
  /*creating a nested key-value pair for the fruit prices
   I originally had the fruit prices as a single object but
   I changed it to a nested object to make it easier to access
   the fruit prices and calories in one object.
   I felt lazy to create a separate object for the calories */
  fruitPrices= {
    "Banana": { 
      price: 1, 
      calories: 73
    }, 
    "Matcha": {
      price: 1, 
      calories: 95
    },
    "Strawberry": {
      price: 1, 
      calories: 33
    },
    "Mango": {
      price: 1, 
      calories: 60
    },
    "Pineapple": {
      price: 1, 
      calories: 82
    },
    "Blueberry": {
      price: 1, 
      calories: 57
    },
    "WheyProtein": {
      price: 1.50, 
      calories: 30
    },
    // as obnoxious as it is to position the objects like this instead of the previous commit
    // I did it to make it easier to read, even though the other way was just as easy
  };
  //creating a key-value pair for the smoothie size
  size = {
    "Small": 1.28,
    "Medium": 2.67, 
    "Large": 3.56
  };
  //for readability sake, it's redundant but its confusing translating java to js
  selectedSize;
  selectedFruits;
  // created a constructor to create the smoothie object
  constructor(selectedFruits, selectedSize) {
    this.selectedFruits = selectedFruits;
    this.selectedSize = selectedSize;
  }

  //creating a method to get the smoothie price
  getSmoothiePrice() {
  }
  //creating a method to get the smoothie calories
  getSmoothieCalories() {
  }
  //creating a method to get the smoothie size
  getSmoothieSize() {
  }
  //creating a method to get the smoothie ingredients
  getSmoothieIngredients() {
  }

  //order details
  getOrderDetails() {
    return `Your smoothie Details \n
            Size: ${this.getSmoothieSize} cup \n
            Fruits ${this.getSmoothieIngredients} \n
            Calories: ${this.getSmoothieCalories} \n
            ______________________________\n
            Total: \n
            $${this.getSmoothiePrice}`;
  }
}


