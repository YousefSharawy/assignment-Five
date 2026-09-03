const userService = require('./post.service')

const createNewPost = async (req, res, next) => {
    try {
        const { title, content, user } = req.body
        const createdPost = await userService.createNewPost(title, content, user)
        res.status(201).json({ message: "post created successfully", success: true, post: createdPost });
    } catch (error) {
        next(error);
    }
}

const deletePostById = async (req, res, next) => {
    try {
        const id = req.params.postId
        const deletedpost = await userService.deletePostById(id)
        res.status(200).json({ message: "post deleted successfully", success: true, post: deletedpost });
    } catch (error) {
        next(error);
    }
}

module.exports = {
    createNewPost,
    deletePostById,

}