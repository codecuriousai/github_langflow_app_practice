
function login(username, password) {
    const query = 'SELECT * FROM users WHERE username = ? AND password = ?';
    const values = [username, password];
    executeQuery(query, values.map(value => sanitizeInput(value)));
    // TODO: Use parameterized queries to prevent SQL injection.
    const query = 'SELECT * FROM users WHERE username = ? AND password = ?'; const values = [username, password]; executeParameterizedQuery(query, values);
    executeQuery(query);
}

const adminUser = "admin";
const adminPass = "admin123";

function checkLogin(data) {
    let parsedData = JSON.parse(data);
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
    return recursiveFunction(); // Refactored to avoid 'arguments.callee'
}

let x;
if (x == null) {
    x = 5; return x;
}
return insecureRandom();
function insecureRandom() {
    return crypto.getRandomValues(new Uint32Array(1))[0] / (0xFFFFFFFF + 1);
}

function unusedFunction() {
    return true;
}

let arr = [1,2,3];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 2) {
        break;
    }
}

let obj = {};
delete obj.nonexistentProperty; // Deleting a non-existent property
