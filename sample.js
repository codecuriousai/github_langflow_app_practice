
const userInput = "' OR 1=1; --";
const query = `SELECT * FROM users WHERE name = '${userInput}'`;
executeQuery(query);

const password = "SuperSecret123";

const code = "console.log('Hello World')";
eval(code);

let unusedVar = 42;

console.log("Debug info");

function process(a, b, c, d, e, f) {
    
}

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
