const {Router} = require("express");
const userRouter = Router();
const authGuard = require ('../../common/guard');
const userController = require('./user.controller')

userRouter.post('/signup',userController.createUser);

module.exports = userRouter;