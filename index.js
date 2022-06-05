const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

// imports routes to be accessed from server
const postRouter = require("./api/posts");

// implementation of local .env file
require("dotenv").config();

//Middleware

app.use(cors());
app.use(express.json());
app.use("/api", postRouter);

//endpoints
/*
app.get("/getposts", (req, res) => {
    const posts = [
        {title: "Post 1", body: "This is a post"},
        {title: "Post 2", body: "This is also a post"}
    ];
    res.status(200).json({ posts });
});

app.post("/newpost", (req, res) => {
    console.log("Post to add: ", req.body);
    res.status(200).json({msg: `Successfully added post: ${req.body.title}`});
});

app.put("/updatepost/:id", (req, res) => {
    console.log("Post to update: ", req.body);
    console.log("post ID: ", req.params.id);

    res.status(200).json({msg: `Successfully updated post: ${req.params.id}`});
})

app.delete("/deletepost/:id", (req, res) => {
    console.log("Post ID ", req.params.id);
    res.status(200).json({msg: `Deleted post: ${req.params.id}`});
})
*/

mongoose.connect(
  process.env.MONGODB_URI,
  { useNewUrlParser: true, useUnifiedTopology: true, autoIndex: true },
  () => console.log("Connected to DB successfully")
);

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
