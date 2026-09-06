const { Router } = require('express');
const commentsRouter = Router();
const commentsController = require('./comments.controller');

commentsRouter.post('/', commentsController.createComments);
commentsRouter.patch('/:commentId', commentsController.updateCommentContent);
commentsRouter.post('/find-or-create', commentsController.findCommentForPostOrCreate);
commentsRouter.get('/search', commentsController.findCommentsWithSpecificWordAndCount);


module.exports = commentsRouter ; 
