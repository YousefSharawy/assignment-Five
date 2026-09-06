const commentRepo = require('./comments.repo');

async function createComments(comments) {
    return await commentRepo.createComments(comments);
}
async function updateCommentContent(id, userId, newContent) {
    if (!id) {
        throw new Error("comment not found");
    }
    if (!userId) {
        throw new Error("user not found");
    }
    if (!newContent) {
        throw new Error("new content is missing");
    }
    return await commentRepo.updateCommentContent(id, userId, newContent);
}
async function findCommentForPostOrCreate(postId, userId, content) {
    let comment = await commentRepo.findCommentForPostOrCreate(postId, userId, content);
    if (!comment) {
        comment = await commentRepo.createComment(postId, userId, content);
    }
    return comment;
}
async function findCommentsWithSpecificWordAndCount(word) {
    return await commentRepo.findCommentsWithSpecificWordAndCount(word)
}
async function retrieveTheThreeMostRecentComments(postId) {
    return await commentRepo.retrieveTheThreeMostRecentComments(postId)
}
module.exports = {
    createComments,
    updateCommentContent,
    findCommentForPostOrCreate,
    retrieveTheThreeMostRecentComments,
}