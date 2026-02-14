// 1. Array of objects (your search results)
const searchResults = [
  { name: 'Gaming Mouse', price: 45, available: true },
  { name: 'Mechanical Keyboard', price: 120, available: true },
  { name: 'Mousepad', price: 15, available: false },
  { name: 'USB Cable', price: 10, available: true }
];

// 2. Using .filter() to get only "Cheap" items (price < 50)
const cheapItems = searchResults.filter((item) => {
  return item.price < 50;
});

// 3. Result
console.log(cheapItems);
/* Output:
[
  { name: 'Gaming Mouse', price: 45, available: true },
  { name: 'USB Cable', price: 10, available: true }
]
*/

const availableProductNames = searchResults
  .filter(item => item.available === true) // First, we filter
  .map(item => item.name);                 // Then, we transform

console.log(availableProductNames); 
// Output: ["Gaming Mouse", "Mechanical Keyboard", "USB Cable"]