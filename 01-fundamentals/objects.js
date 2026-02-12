const car = {
  // Properties (Characteristics)
  brand: "Tesla",
  model: "Model 3",
  color: "Red",
  year: 2024,
  isRunning: false,

  // Methods (Actions the object can perform)
  start: function() {
    this.isRunning = true;
    console.log("The engine is running...");
  },
  
  stop: function() {
    this.isRunning = false;
    console.log("Engine stopped.");
  }
};

console.log(car.brand); // Accessing a property
car.start();
car.model = "Model S"; // Modifying a property
console.log(car.model);