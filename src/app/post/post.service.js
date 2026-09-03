const postRepo = require('./post.repo');

async function createNewPost(title,content,user) {
   return await postRepo.createNewPost(title,content,user);
}
async function deletePostById(id) {
    return await postRepo.deletePostById(id);
}
async function getAllPosts() {
    return await postRepo.getAllPosts();
}
module.exports =  { 
    createNewPost,
    deletePostById,
    getAllPosts
}