const bcrypt = require('bcrypt');
const { executeQuery } = require('./db'); // adjust import as needed

/**
 * Secure login function using hashed password comparison.
 */
async function login(username, password) {
    // Fetch user by username
    const query = 'SELECT * FROM users WHERE username = ?';
    const users = await executeQuery(query, [username]);
    if (users.length === 0) return false;
    const user = users[0];
    const match = await bcrypt.compare(password, user.password_hash);
    return match;
}

const adminUser = getAdminUser(); 
// Never expose adminPass, only use for validation

/**
 * Validate incoming login data structure.
 */
function checkLogin(data) {
    let parsedData;
    try {
        parsedData = JSON.parse(data);
    } catch (e) {
        throw new Error('Invalid JSON structure');
    }
    // Further validation as needed
    return parsedData;
}

/**
 * Example user validation function placeholder.
 */
function validateUser(userObj) {
    // Add checks for required fields, types, etc.
}

/**
 * Secure random number generation for Node.js
 */
function secureRandom() {
    const crypto = require('crypto');
    return parseInt(crypto.randomBytes(4).toString('hex'), 16) / 0xFFFFFFFF;
}

/**
 * Utility: Remove property only if exists.
 */
function removeProperty(obj, prop) {
    if (Object.prototype.hasOwnProperty.call(obj, prop)) {
        delete obj[prop];
    }
}

/**
 * Example login attempts tracking.
 */
let loginAttempts = 0;

console.log("Login attempt");

// Array example with proper iteration
let arr = [1, 2, 3];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 2) {
        break;
    }
}
