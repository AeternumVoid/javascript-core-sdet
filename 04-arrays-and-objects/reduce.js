const cart = [
  { item: 'Laptop', price: 1000 },
  { item: 'Mouse', price: 25 },
  { item: 'Keyboard', price: 75 }
];

// .reduce(callback, initialValue)
const totalPrice = cart.reduce((accumulator, currentProduct) => {
  return accumulator + currentProduct.price;
}, 0); // <--- 0 is the starting point (initialValue)

console.log(totalPrice); 
// Output: 1100


const results = [true, true, false, true];

const allPassed = results.reduce((acc, current) => {
  return acc && current; // if one is false, the acc won't be able to recover and will always return false
}, true);

console.log(allPassed); // Output: false


// 1. Raw data from your test runner
const testResults = [
  { testName: 'Login', status: 'passed' },
  { testName: 'Checkout', status: 'failed' },
  { testName: 'Profile Edit', status: 'passed' },
  { testName: 'API Sync', status: 'passed' },
  { testName: 'Logout', status: 'failed' }
];

// 2. Using .reduce() to accumulate only the 'passed' count
const passedCount = testResults.reduce((accumulator, test) => {
  // If the test passed, we increment our counter
  if (test.status === 'passed') {
    return accumulator + 1;
  }
  // If it didn't pass, we return the current count unchanged
  return accumulator;
}, 0); // Starting point is 0 passed tests

// 3. Simple Math for the SDET Report
const passRate = (passedCount / testResults.length) * 100;

console.log(`Passed Tests: ${passedCount}`); // Output: 3
console.log(`Success Rate: ${passRate}%`);   // Output: 60%