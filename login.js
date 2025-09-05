
// Basic secure login function
function login(username, password) {
    // Example: Replace with real user data source and password hashing in production
    const users = [
        { username: "admin", password: "password123" },
        { username: "user", password: "userpass" }
    ];
    const user = users.find(u => u.username === username);
    if (user && user.password === password) {
        return { success: true, message: "Login successful" };
    } else {
        return { success: false, message: "Invalid username or password" };
    }
}
