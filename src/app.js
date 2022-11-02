const express = require("express");
const cors = require("cors");
const userRouter = require("./users/users.router");
const authRouter = require("./auth/auth.router");
const postRouter = require("./posts/posts.router");
const categoriesRouter = require("./categories/categories.router");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/users", userRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/categories", categoriesRouter);
app.use("/api/v1/posts", postRouter);

module.exports = app;
