function checkPasswordLength(password) {
    if (typeof password !== "string" || password.length <= 6) {
        throw new Error("Password must be longer than 6 characters");
    }
}

function checkNameLength(name) {
    if (typeof name !== "string" || name.trim().length <= 2) {
        throw new Error("Name must be longer than 2 characters");
    }
}

module.exports = {
    checkPasswordLength,
    checkNameLength
};