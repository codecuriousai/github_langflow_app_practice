
const query = 'SELECT * FROM users WHERE name = ?'; executeQuery(query, [userInput]);
const query = `SELECT * FROM users WHERE name = '${userInput}'`;
executeQuery(query);

const password = "SuperSecret123";

const code = "console.log('Hello World')";
new Function(code)();

Remove unused variables to improve code clarity.

console.log("Debug info");

function process(a, b, c, d, e, f) {
    
}

try {
    throw new Error('Oops');
} catch (e) {
    
}

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '1';
