const userRepo = require("./user.repo")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {
    checkPasswordLength,
    checkNameLength
} = require("../../common/validator");

async function createUser(name, email, password) {
    checkNameLength(name);
    checkPasswordLength(password);
    const userExistance = await userRepo.checkUserExistanceByEmail(email);
    if (userExistance) throw new Error("Email already registered");

    const hashedPassword = await bcrypt.hash(password, 10);
    return await userRepo.createUser(name, email, hashedPassword);
}



module.exports = {
    createUser
}