const {Router} = require("express")
const postRouter = Router();
const postController = require('./post.controller');

postRouter.post('',postController.createNewPost);
postRouter.delete('/:postId',postController.deletePostById);
postRouter.get('/details',postController.getAllPosts);
postRouter.get('/comment-count',postController.getAllPostsWIthCommentCount);

module.exports = postRouter;