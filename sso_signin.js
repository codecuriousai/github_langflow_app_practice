
const userInput = "' OR 1=1; --";
const query = `SELECT * FROM users WHERE name = '${userInput}'`;

executeQuery(query);

const password = "SuperSecret123";


