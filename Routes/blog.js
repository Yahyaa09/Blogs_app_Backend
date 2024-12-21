
const express = require("express");
const router = express.Router();

//import controllers
const {createCommentController} = require("../controllers/commentController");
const {createPostController,getPostsController} = require("../controllers/postController");
const {likeController,unlikeController} = require("../controllers/likeController");
const dummyController = require("../controllers/dummyController");

//map controller with route
router.get("/dummyroute",dummyController);

router.post("/comments/create",createCommentController);

router.post("/posts/create",createPostController);

router.get("/posts",getPostsController);

router.post("/likes/like",likeController);

router.post("/likes/unlike",unlikeController);

//export
module.exports = router;
