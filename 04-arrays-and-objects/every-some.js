const flights = [
  { destination: 'New York', price: 500, direct: true },
  { destination: 'London', price: 700, direct: false },
  { destination: 'Paris', price: 650, direct: true }
];

// 1. Requirement: All flights must be under $1000
const isBudgetFriendly = flights.every(flight => flight.price < 1000);
console.log(`Are all flights cheap? ${isBudgetFriendly}`); // Output: true

// 2. Requirement: At least one flight must be a direct flight
const hasDirectOption = flights.some(flight => flight.direct === true);
console.log(`Is there a direct flight? ${hasDirectOption}`); // Output: true