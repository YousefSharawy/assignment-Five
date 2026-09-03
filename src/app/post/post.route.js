const {Router} = require("express")
const postRouter = Router();
const postController = require('./post.controller');

postRouter.post('',postController.createNewPost);
postRouter.delete('/:postId',postController.deletePostById);

module.exports = postRouter;