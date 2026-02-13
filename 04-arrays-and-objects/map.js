// 1. Raw data from an API or Database
const products = [
  { id: 1, name: 'laptop', price: 1200, stock: 5 },
  { id: 2, name: 'mouse', price: 25, stock: 50 },
  { id: 3, name: 'keyboard', price: 75, stock: 15 }
];

// 2. Using .map() to extract only the names and transform them
const productNames = products.map((product) => {
  return product.name.toUpperCase();
});

// 3. Result
console.log(productNames); 
// Output: ["LAPTOP", "MOUSE", "KEYBOARD"]

// 4. Typical SDET Validation (Assertion)
const expectedNames = ["LAPTOP", "MOUSE", "KEYBOARD"];
const isTestPassing = JSON.stringify(productNames) === JSON.stringify(expectedNames);

console.log(`Test Passed: ${isTestPassing}`);