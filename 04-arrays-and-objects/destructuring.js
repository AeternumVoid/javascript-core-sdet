/**
 * =================================================================
 * SDET FOUNDATIONS: OBJECTS & DESTRUCTURING
 * =================================================================
 * * WHY? 
 * 1. Playwright passes the { page } object to every test using this.
 * 2. API responses come as objects; you need to extract data quickly.
 * 3. Page Object Models (POM) rely on passing configuration objects.
 */

// 1. BASIC DESTRUCTURING
const testResult = {
    id: 'TR-101',
    status: 'failed',
    duration: 450,
    error: 'Timeout: Element not found'
};

// Instead of writing testResult.status and testResult.error:
const { status, error } = testResult;

console.log(`Test Status: ${status}`); // Output: failed
console.log(`Reason: ${error}`);      // Output: Timeout...


// 2. ALIASING (Renaming variables)
// Useful when you have two objects with the same property names
const { status: apiStatus } = testResult;
console.log(`The status renamed is: ${apiStatus}`);


// 3. DEFAULT VALUES
// Perfect for configuration files or optional parameters
const config = {
    env: 'Staging'
    // timeout is missing here
};

const { env, timeout = 30000 } = config; 
console.log(`Running on ${env} with timeout of ${timeout}ms`); // timeout defaults to 30000


// 4. FUNCTION PARAMETER DESTRUCTURING (The "Playwright Pattern")
// This is exactly how 'test("name", async ({ page }) => { ... })' works.
const login = async ({ username, password, rememberMe = true }) => {
    console.log(`--- Logging in user: ${username} ---`);
    console.log(`--- Password provided: ${password.replace(/./g, '*')} ---`);
    console.log(`--- Stay logged in? ${rememberMe} ---`);
};

// You pass one object, the function extracts what it needs
login({
    username: 'admin_qa',
    password: 'SuperSecretPassword123'
});


/**
 *  SUMMARY FOR YOUR PRACTICE FILE:
 * * * DESTRUCTURING: Extracts properties into variables: const { x } = object;
 * * SHORTHAND: If the variable name matches the property, just write it once.
 * * FLEXIBILITY: When passing objects to functions, the ORDER of properties does not matter.
 */