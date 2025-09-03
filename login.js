
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

// Additional Sonar issues below (no comments)

function deprecatedFunction() {
    arguments.callee(); // Use of deprecated 'arguments.callee'
}

let x;
if (x == null) {
    x = 5;
}

function insecureRandom() {
    return Math.random(); // Use of insecure random
}

function unusedFunction() {
    return true;
}

let arr = [1,2,3];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] = 2) { // Assignment in conditional
        break;
    }
}

let obj = {};
delete obj.nonexistentProperty; // Deleting a non-existent property
