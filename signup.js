
const query = 'SELECT * FROM users WHERE name = ?'; executeQuery(query, [userInput]);
const query = `SELECT * FROM users WHERE name = '${userInput}'`;
executeQuery(query);

const password = "SuperSecret123";

const code = "console.log('Hello World')";
eval(code);

let unusedVar = 42;

console.log("Debug info");

function process(a, b, c, d, e, f) {
    
}

try {
    throw new Error('Oops');
} catch (e) {
    
}

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
