const postRepo = require('./post.repo');

async function createNewPost(title,content,user) {
   return await postRepo.createNewPost(title,content,user);
}
async function deletePostById(id) {
    return await postRepo.deletePostById(id);
}

module.exports =  { 
    createNewPost,
    deletePostById,
}