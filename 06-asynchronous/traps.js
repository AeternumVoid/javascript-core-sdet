/**
 * =================================================================
 * SDET FOUNDATIONS: ASYNC + ARRAYS (The "Trap" and the "Solutions")
 * =================================================================
 * * THE PROBLEM:
 * Array.forEach() is "Async-unaware". It does not wait for Promises.
 * If you use 'await' inside a .forEach, the loop will finish BEFORE
 * the actions inside are actually done.
 */

const urls = ['google.com', 'playwright.dev', 'github.com'];

// ---  THE WRONG WAY: The forEach Trap ---
// This will fire all requests but WON'T wait. It often causes "Flaky" tests.
const badExample = async () => {
    urls.forEach(async (url) => {
        // This 'await' is ignored by the forEach loop
        await page.goto(`https://${url}`); 
        console.log(`Visited ${url}`);
    });
    console.log('Done!'); // This prints BEFORE the pages are actually visited.
};


// ---  SOLUTION 1: The 'for...of' Loop (Sequential) ---
// Use this for UI actions (clicks, navigation) where ORDER matters.
const runSequential = async () => {
    console.log('--- Starting Sequential Execution ---');
    for (const url of urls) {
        // The code blocks here until the promise is RESOLVED
        await page.goto(`https://${url}`);
        console.log(`Finished: ${url}`);
    }
    console.log('All pages visited one by one!');
};


// ---  SOLUTION 2: Promise.all() (Parallel) ---
// Use this for SPEED (API calls, data setup) when order doesn't matter.
const runParallel = async () => {
    console.log('--- Starting Parallel Execution ---');
    
    // 1. We create an array of Promises using .map()
    const taskPromises = urls.map(url => page.goto(`https://${url}`));

    // 2. We wait for ALL of them to finish at the same time
    await Promise.all(taskPromises);
    
    console.log('All pages loaded simultaneously!');
};


/**
 *  SUMMARY FOR YOUR PRACTICE FILE:
 * * 1. for...of loop: Best for Browser interaction (Slow but Stable).
 * 2. Promise.all: Best for Data/API setup (Fast).
 * 3. Array.forEach: NEVER use with 'await' in Automation.
 */