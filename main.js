const { config } = require('dotenv');
config();
const express = require("express");
const app = express();

const userRouter = require('./src/app/user/user.route');

app.use(express.json());

app.use('/users', userRouter)



app.use((req, res) => {
    res.status(404).json({ message: "Invalid Route" });
});
app.use((err, req, res, next) => {
    res.status(400).json({ message: err.message, success: false, stack: err.stack });
});

app.listen(3000, () => {
    console.log("App is listenning on port:3000");
});