const express = require("express");
const postRouter = express.Router();
const Post = require("../models/Post");

postRouter.get("/getposts", (req, res) => {
  Post.find({}, (err, documents) => {
    if (err) {
      res.status(500).json({
        msg: {
          msgBody: "Error while retrieving posts",
          msgError: true,
        },
      });
    } else {
      res.status(200).json({ posts: documents });
    }
  });
});

postRouter.post("/newpost", (req, res) => {
  console.log("Post to add: ", req.body);
  const newPost = new Post({
    title: req.body.title,
    body: req.body.body,
  });
  newPost.save((err) => {
    if (err) {
      res.status(500).json({
        msg: {
          msgBody: "An error occured while saving a post",
          msgError: true,
        },
      });
    } else {
      res.status(201).json({
        msg: {
          msgBody: "Successfully added post",
          msgError: false,
        },
      });
    }
  });
});

postRouter.put("/updatepost/:id", (req, res) => {
  Post.findByIdAndUpdate(
    req.params.id,
    {
      title: req.body.title,
      body: req.body.body,
    },
    (err) => {
      if (err) {
        res.status(500).json({
          msg: {
            msgBody: "An error occured while updating",
            msgError: true,
          },
        });
      } else {
        res.status(200).json({
          msg: {
            msgBody: "Successfully updated post",
            msgError: false,
          },
        });
      }
    }
  );
});

postRouter.delete("/deletepost/:id", (req, res) => {
  Post.findByIdAndDelete(req.params.id, (err) => {
    if (err) {
      res.status(500).json({
        msg: {
          msgBody: "An error occured while deleting",
          msgError: true,
        },
      });
    } else {
      res.status(200).json({
        msg: {
          msgBody: "Successfully deleted post",
          msgError: false,
        },
      });
    }
  });
});

module.exports = postRouter;
