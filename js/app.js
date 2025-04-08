// create all the elements needed for the smoothie
const div = document.getElementById("smoothie-list");

// Smoothie class
class SmoothieIngredient {
  /*creating a nested key-value pair for the fruit prices
   I originally had the fruit prices as a single object but
   I changed it to a nested object to make it easier to access
   the fruit prices and calories in one object.
   I felt lazy to create a separate object for the calories */
  fruitPrices= {
    "Banana": {price: 1, calories: 73}, 
    "Apple": {price: 1, calories: 95},
    "Orange": {price: 1, calories: 62},
    "Strawberry": {price: 1, calories: 33},
    "Mango": {price: 1, calories: 60},
    "Pineapple": {price: 1, calories: 82},
    "Blueberry": {price: 1, calories: 57},
    "Peach": {price: 1, calories: 58},
    "Kiwi": {price: 1, calories: 42},
    "Grapes": {price: 1, calories: 69},
    "Watermelon": {price: 1, calories: 30},
  };
  //creating a key-value pair for the smoothie size
  size = {
    "Small": 1.28,
    "Medium": 2.67, 
    "Large": 3.56
  };
  // created a constructor to create the smoothie object
  constructor(fruitPrices, size, calories) {
    this.fruitPrices = fruitPrices;
    this.size = size;
    this.calories = calories;
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
            Total: $${getSmoothiePrice}`;
  }
}


