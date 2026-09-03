const postRepo = require('./post.repo');

async function createNewPost(title,content,user) {
   return await postRepo.createNewPost(title,content,user);
}

module.exports =  { 
    createNewPost,
}