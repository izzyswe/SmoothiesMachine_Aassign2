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

  //creating a method to get the smoothie price,
  //admittedly, i had the help of chatgpt to get the price of the smoothie
  //this is the first time, i am trying to utilize objects in the way it is written
  getSmoothiePrice() {
    //getting the price of the smoothie size, current value is 0, however, it will be updated later
    let totalPrice = 0;

    //we will use a for loop to iterate through the selected fruits using the selectedFruits array
    //basically this is saying, for every fruit in the selectedFruits array...
    for(const fruit of this.selectedFruits) { // <- even though the array is empty, it will iterate through the loop when the smoothie is created
      //we grab the fruit price from the fruitPrices object
      totalPrice += this.fruitPrices[fruit].price;
    }
    //we grab the size price from the size object, each size has a price corresponding to it
    totalPrice += this.size[this.selectedSize];
    //we return the total price of the smoothie, using the toFixed method to round the price to 2 decimal places
    return totalPrice.toFixed(2);
  }
  //creating a method to get the smoothie calories
  getSmoothieCalories() {
    //initializing the totalCalories variable to 0, because there is no fruit
    let totalCalories = 0;

    //we will use a for loop to iterate through the selected fruits using the selectedFruits array
    //basically this is saying, for every fruit in the selectedFruits array...
    for(const fruit of this.selectedFruits) { // <- even though the array is empty, it will iterate through the loop when the smoothie is created
      //we grab the fruit calories from the fruitPrices object
      totalCalories += this.fruitPrices[fruit].calories;
    }

    //we will return the total calories of the smoothie
    return totalCalories;
  }
  //creating a method to get the smoothie size
  getSmoothieSize() {
    //we will return the size of the smoothie
    return this.selectedSize;
  }
  //creating a method to get the smoothie ingredients
  getSmoothieIngredients() {
    //we will return the selected fruits of the smoothie
    return this.selectedFruits.join(", ");
  }

  //order details
  getOrderDetails() {
    return `Your smoothie Details \n
            Size: ${this.getSmoothieSize()} cup \n
            Fruits: ${this.getSmoothieIngredients()} \n
            Calories: ${this.getSmoothieCalories()} \n
            ______________________________\n
            Total: \n
            $${this.getSmoothiePrice()}`;
  }
}

//creating a function to create the smoothie
//this function will be called when the user clicks the button

document.getElementById("smoothieForm").addEventListener("submit", function(event) {
  event.preventDefault(); // prevent the form from reloading the page

  // 1. Get all checked fruits
  let selectedFruits = []; // <- start with an empty array
  const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked'); // <- get all checked checkboxes
  for (let box of checkboxes) { // <- iterate through the checkboxes, saying for each box of the checkboxes...
    selectedFruits.push(box.value); // <- push the value of the checkbox into the selectedFruits array (at the end of the array)
  }
  // 2. Get selected size (match the object key: "Small", "Medium", "Large")
  const sizeValue = document.getElementById("size").value;
  // 3. Get smoothie name
  const smoothieName = document.getElementById("smoothieName").value;
  // 3. Create smoothie object
  const smoothie = new SmoothieIngredient(selectedFruits, sizeValue);
  // 4. Get order summary string
  const summary = smoothie.getOrderDetails();

  displaySmoothieSummary(smoothieName, summary);
});

//creating a function to generate the smoothie Name
function displaySmoothieSummary(name, summaryText) {
  const summaryDiv = document.getElementById("orderSummary");
  // Clear previous content
  summaryDiv.innerHTML = "";
  // If name is blank or only spaces, use default
  const smoothieName = name.trim() === "" ? "My Smoothie" : name;
  // Create and add the heading
  const nameHeading = document.createElement("h2");
  nameHeading.innerText = smoothieName;
  summaryDiv.appendChild(nameHeading);
  // Create and add the order details
  const summaryBlock = document.createElement("pre"); // to keep line breaks
  summaryBlock.innerText = summaryText;
  summaryDiv.appendChild(summaryBlock);
}

