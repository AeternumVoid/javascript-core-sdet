// 1. Current users in the system (Objects)
const currentDatabaseUsers = [
    { id: '101', name: 'Test_User_Alpha', active: true },
    { id: '102', name: 'Real_Customer_1', active: true },
    { id: '103', name: 'Test_User_Beta', active: false },
    { id: '205', name: 'Admin_Internal', active: true }
];

// 2. Mock API call to delete a user
const deleteUserApi = async (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`[API]: Successfully deleted user ID: ${id}`);
            resolve({ status: 'deleted' });
        }, 500); // Simulated network latency
    });
};

// 3. THE CLEANUP PROCESS
const globalTeardown = async () => {
    console.log('--- STARTING GLOBAL TEARDOWN ---');

    // STEP A: Identify "Ghost" data
    // We filter by name starting with 'Test'
    const ghostUsers = currentDatabaseUsers.filter(({ name }) => 
        name.startsWith('Test')
    );

    if (ghostUsers.length === 0) {
        return console.log('No test data found. Skipping cleanup.');
    }

    // STEP B: Extract IDs
    const idsToDelete = ghostUsers.map(({ id }) => id);
    console.log(`Identified ${idsToDelete.length} users to remove: [${idsToDelete}]`);

    // STEP C: Parallel Execution (Performance)
    // Since these are independent API calls, we use Promise.all to be FAST
    const deletePromises = idsToDelete.map(id => deleteUserApi(id));
    
    await Promise.all(deletePromises);

    console.log('--- TEARDOWN COMPLETE: Environment is clean ---');
};

// RUN
globalTeardown();