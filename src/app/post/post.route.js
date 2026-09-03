const {Router} = require("express")
const postRouter = Router();
const postController = require('./post.controller');

postRouter.post('',postController.createNewPost);

module.exports = postRouter;