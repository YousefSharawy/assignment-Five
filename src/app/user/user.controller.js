const authService = require('./user.service')

const createUser = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        const createdUser = await authService.createUser(name, email, password);
        res.status(201).json({ "message": "User created successfully", success: true, "user": createdUser });
    }
    catch (err) {
        next(err)

    }
}
module.exports = {
    createUser
}