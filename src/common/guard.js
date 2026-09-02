const userRepo = require("../app/user/user.repo")
const jwt = require("jsonwebtoken");

const authGuard = async (req, res, next) => {
    try {
        const authorization = req.headers.authorization;
        if (!authorization) { throw new Error("authorization is missing") }
        const token = authorization.split(' ')[1];
        if (!token) { throw new Error("token is missing") }
        const payload = jwt.verify(token, process.env.JWT_SECRET)
        const id = payload.id;
        const userExistance = userRepo.checkUserExistance(id);
        if (!userExistance) { throw new Error("User not found") }
        req.user = payload;
        next();
    } catch (err) {
        next(err);
    }

}
module.exports = authGuard;