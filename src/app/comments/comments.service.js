const commentRepo = require('./comments.repo');

async function createComments(comments) {
    return await commentRepo.createComments(comments);
}

module.exports = {
    createComments,
}