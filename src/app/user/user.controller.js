const userService = require('./user.service')

const createUser = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        const createdUser = await userService.createUser(name, email, password);
        res.status(201).json({ "message": "User created successfully", success: true, "user": createdUser });
    }
    catch (err) {
        next(err)
    }
}
const updateUser = async (req, res, next) => {
    try {
        const updates = req.body;
        const id = Number(req.params.id);
        const updatedUser = await userService.updateUser(id, updates);
        res.status(200).json({ "message": "User updated successfully", success: true, "user": updatedUser });
    } catch (error) {
        next(error)
    }
}

const getUserByEmail = async (req, res, next) => {
    try {
        const email = req.query.email;
        const user = await userService.getUserByEmail(email);
        res.status(200).json({success: true, "user": user });
    } catch (error) {
        next(error)
    }
}
module.exports = {
    createUser,
    updateUser,
    getUserByEmail,
}