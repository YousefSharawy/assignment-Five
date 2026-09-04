const commentService = require('./comments.service');


const createComments = async (req, res, next) => {
    try {
        const comments = req.body.comments;
        const insertedComments = await commentService.createComments(comments);
        res.status(201).json({
            message: "comments created",
            success: true,
            comments: insertedComments,
        });
    } catch (error) {
        next(error)
    }
}

module.exports = {
    createComments
}