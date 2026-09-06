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

const updateCommentContent = async (req, res, next) => {
    const commentId = Number(req.params.commentId);
    const { userId, content } = req.body;
    try {
        await commentService.updateCommentContent(commentId, userId, content);
        res.status(200).json({
            message: "Comment updated",
        });
    } catch (error) {
        next(error);
    }

}

const findCommentForPostOrCreate = async (req, res, next) => {
    const { postID, userId, content } = req.body;
    try {
        const comment = await commentService.findCommentForPostOrCreate(postID, userId, content);
        res.status(200).json({
            comment: comment,
        });
    } catch (error) {
        next(error);
    }

}
const findCommentsWithSpecificWordAndCount = async (req, res, next) => {
    const word = req.query.word;
    try {
        const commentsWithWordAndCount = await commentService.findCommentsWithSpecificWordAndCount(word);
        res.status(200).json({
            count: commentsWithWordAndCount.count,
            comments: commentsWithWordAndCount.comments,
        });
    } catch (error) {
        next(error);
    }
}
const retrieveTheThreeMostRecentComments = async (req, res, next) => {
    const postId = Number(req.params.postId);
    try {
        const threeMostRecentComments = await commentService.retrieveTheThreeMostRecentComments(postId);
        res.status(200).json({
            comments: threeMostRecentComments
        });
    } catch (error) {
        next(error);
    }
}
const getSpecificCommentByPK = async (req, res, next) => {
    const id = Number(req.params.id);
    try {
        const respopnse = await commentService.getSpecificCommentByPK(id);
        res.status(200).json({
          comment:respopnse
        });
    } catch (error) {
        next(error);
    }
}
module.exports = {
    createComments,
    updateCommentContent,
    findCommentForPostOrCreate,
    findCommentsWithSpecificWordAndCount,
    retrieveTheThreeMostRecentComments,
    getSpecificCommentByPK
}