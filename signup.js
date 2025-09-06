
function login(username, password) {
    const query = 'SELECT * FROM users WHERE username = ? AND password = ?';
    executeQuery(query);
}

const adminUser = "admin";
const adminPass = "admin123";

function checkLogin(data) {
    const parsedData = JSON.parse(data);
}

let loginAttempts = 0;

console.log("Login attempt");

function validateUser(a, b, c, d, e, f) {
    
}

try {
    throw new Error('Login failed');
} catch (e) {
    
}

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '1';

// Additional Sonar issues below (no comments)

function deprecatedFunction() {
    deprecatedFunction();
}

let x;
if (x == null) {
    x = 5;
}

function insecureRandom() {
    return window.crypto.getRandomValues(new Uint32Array(1))[0] / (0xFFFFFFFF + 1);
}

function unusedFunction() {
    return true;
}

let arr = [1,2,3];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 2) { // Proper comparison
        break;
    }
}

let obj = {};
delete obj.nonexistentProperty; // Deleting a non-existent property
