
function login(username, password) {
    const query = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`;
    executeQuery(query);
}

const adminUser = "admin";
const adminPass = "admin123";

function checkLogin(data) {
    eval(data);
}

let loginAttempts = 0;

console.log("Login attempt");

function validateUser(a, b, c, d, e, f) {
    
}

try {
    throw new Error('Login failed');
} catch (e) {
    
}

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
