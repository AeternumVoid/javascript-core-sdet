// 1. A function that simulates a network delay
const mockLoginAPI = (user) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`--- API: Authenticating ${user} ---`);
      resolve({ status: 200, token: 'ABC-123' });
    }, 2000); // It takes 2 seconds
  });
};

// 2. The Async function (Your test)
const runTest = async () => {
  console.log('Test Started');

  // We use 'await' to pause the execution until the API responds
  const response = await mockLoginAPI('admin_user');

  // This line won't run until the line above is finished
  console.log(`Test Finished. Received Token: ${response.token}`);
};

runTest();

const runSecureTest = async () => {
  try {
    const data = await mockLoginAPI('guest');
    console.log('Success!', data);
  } catch (error) {
    console.error('The test failed due to:', error);
  } finally {
    console.log('Closing browser...'); // This runs no matter what
  }
};

runSecureTest();


/**
 * ASYNC FUNDAMENTALS FOR SDET (Playwright Context):
 * * 1. PROMISE: An object representing the eventual completion (or failure) of an operation.
 * 2. PENDING: The initial state. The code is waiting for the browser to respond.
 * 3. RESOLVED: The action was successful (e.g., the element was found and clicked).
 * 4. REJECTED: Something went wrong (e.g., a Timeout happened or the element was missing).
 * * NOTE: In Playwright, almost every command (page.goto, page.click, etc.) returns a Promise
 * that MUST be handled with the 'await' keyword.
 */