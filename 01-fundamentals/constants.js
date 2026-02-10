const SHIP_NAME = "JS Enterprise";

// If a rogue AI tries to rename the ship:
// SHIP_NAME = "The Void Wanderer"; 
// Uncaught TypeError: Assignment to constant variable.

const SHIP_STATUS = {
    oxygen: 100,
    engines: "Active",
    destination: "Mars"
};

// This IS allowed (modifying the properties inside)
SHIP_STATUS.oxygen = 85; 
SHIP_STATUS.engines = "Overheated";

// This is NOT allowed (trying to replace the entire object)
/*
SHIP_STATUS = {
    oxygen: 0,
    engines: "Exploded"
}; 
*/