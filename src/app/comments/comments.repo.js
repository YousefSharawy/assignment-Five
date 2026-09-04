const prisma = require('../../common/db/prisma');

async function createComments(comments) {
    return await prisma.comment.createManyAndReturn({
        data: comments
    });
}

module.exports = {
    createComments, 
}