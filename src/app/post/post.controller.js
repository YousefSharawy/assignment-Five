const userService = require('./post.service')

const createNewPost = async (req, res, next) => {
    try {
        const { title, content, user } = req.body
        const createdPost = await userService.createNewPost(title, content, user)
        res.status(201).json({ message: "User created successfully", success: true, post: createdPost });
    } catch (error) {
        next(error);
    }
}
module.exports = {
    createNewPost,
}