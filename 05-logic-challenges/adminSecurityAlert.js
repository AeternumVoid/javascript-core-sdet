// 1. Mock Data: A list of users from an API or Database
const users = [
    { id: 1, name: 'Alice', role: 'admin', email: 'alice@test.com' },
    { id: 2, name: 'Bob', role: 'guest', email: 'bob@test.com' },
    { id: 3, name: 'Charlie', role: 'admin', email: 'charlie@test.com' },
    { id: 4, name: 'Dave', role: 'editor', email: 'dave@test.com' }
];

// 2. Mock Async Function: Simulates a Playwright API request
const sendSecurityEmail = async (email) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`[MAIL SERVER]: Alert sent to >> ${email}`);
            resolve({ success: true });
        }, 1000); // 1 second delay per email
    });
};

// 3. THE MAIN AUTOMATION TASK
const runAdminSecurityCheck = async () => {
    console.log('--- Starting Security Audit ---');

    // STEP A: Filter & Map (Data Manipulation)
    const adminEmails = users
        .filter(({ role }) => role === 'admin') // Destructuring 'role' directly
        .map(({ email }) => email);             // Extracting only 'email'

    console.log(`Found ${adminEmails.length} admins to notify...`);

    // STEP B: Async Loop (Flow Control)
    // We use 'for...of' because we want to be polite to the server (sequential)
    for (const email of adminEmails) {
        await sendSecurityEmail(email);
    }

    console.log('--- Audit Complete: All admins notified! ---');
};

// EXECUTE
runAdminSecurityCheck();