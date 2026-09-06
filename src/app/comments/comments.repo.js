const prisma = require('../../common/db/prisma');

async function createComments(comments) {
    return await prisma.comment.createManyAndReturn({
        data: comments
    });
}
async function createComment(postId, userId, content) {
    return await prisma.comment.create({
        data: {
            postId: postId,
            userId: userId,
            content: content,
        }
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
async function findCommentForPostOrCreate(postId, userId, content) {
    const commentExistence = await prisma.comment.findFirst({
        where: {
            postId: postId,
            userId: userId,
            content: content,
        }
    });
    return commentExistence;
}
async function findCommentsWithSpecificWordAndCount(word) {
    const comments = await prisma.comment.findMany({
        where: {
            content: {
                contains: word,
                mode: "insensitive"
            },
        },
    });
    return { comments, count: comments.length };

}
async function retrieveTheThreeMostRecentComments(postId) {
    return await prisma.comment.findMany({
        where:{
            postId:postId,
        },
        orderBy:{
            createdAt:"desc",
        },
        take:3
    });
}
module.exports = {
    createComments,
    createComment,
    updateCommentContent,
    findCommentForPostOrCreate,
    findCommentsWithSpecificWordAndCount,
    retrieveTheThreeMostRecentComments
}