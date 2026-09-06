const commentRepo = require('./comments.repo');

async function createComments(comments) {
    return await commentRepo.createComments(comments);
}
async function updateCommentContent(id,userId,newContent) {
    if(!id) {
        throw new Error ("comment not found");
    }
     if(!userId) {
        throw new Error ("user not found");
    }
    if(!newContent) {
        throw new Error ("new content is missing");
    }
    return await commentRepo.updateCommentContent(id,userId,newContent);
}
module.exports = {
    createComments,
    updateCommentContent
}