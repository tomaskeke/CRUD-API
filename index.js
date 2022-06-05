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

mongoose.connect(
  process.env.MONGODB_URI,
  { useNewUrlParser: true, useUnifiedTopology: true, autoIndex: true },
  () => console.log("Connected to DB successfully")
);

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
