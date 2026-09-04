const postService = require('./post.service')

const createNewPost = async (req, res, next) => {
    try {
        const { title, content, user } = req.body
        const createdPost = await postService.createNewPost(title, content, user)
        res.status(201).json({ message: "post created successfully", success: true, post: createdPost });
    } catch (error) {
        next(error);
    }
}

const deletePostById = async (req, res, next) => {
    try {
        const id = req.params.postId
        const deletedpost = await postService.deletePostById(id)
        res.status(200).json({ message: "post deleted successfully", success: true, post: deletedpost });
    } catch (error) {
        next(error);
    }
}

const getAllPosts = async (req, res, next) => {
    try {
        const posts = await postService.getAllPosts();
        res.status(200).json({ message: "Post are retrieved successfully", success: true, post: posts });
    } catch (error) {
        next(error)
    }
}
const getAllPostsWIthCommentCount = async (req, res, next) => {
    try {
        const postsWithCommentCount = await postService.getAllPostsWIthCommentCount();
        res.status(200).json({ message: "Post with counts are retrieved successfully", success: true, post: postsWithCommentCount });
    } catch (error) {
        next(error)
    }
}

module.exports = {
    createNewPost,
    deletePostById,
    getAllPosts,
    getAllPostsWIthCommentCount
}