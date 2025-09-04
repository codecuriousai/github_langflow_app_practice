
function login(username, password) {
    const query = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`;
    executeQuery(query);
}

const adminUser = "admin";
const adminPass = "admin123";

function checkLogin(data) {
    eval(data);
}