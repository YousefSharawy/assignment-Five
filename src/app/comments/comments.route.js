const { Router } = require('express');
const commentsRouter = Router();
const commentsController = require('./comments.controller');

commentsRouter.post('/', commentsController.createComments);
commentsRouter.patch('/:commentId', commentsController.updateCommentContent);


module.exports = commentsRouter ; 
