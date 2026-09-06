const prisma = require('../../common/db/prisma');

async function createComments(comments) {
    return await prisma.comment.createManyAndReturn({
        data: comments
    });
}
async function updateCommentContent(id, userId, newContent) {
    return await prisma.comment.update({
        data: {
            content: newContent
        },
        where: {
            id: id,
            userId: userId
        }
    });
}
module.exports = {
    createComments,
    updateCommentContent,
}