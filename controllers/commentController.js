
const mongoose = require("mongoose");
const Comment = require("../Models/commentModel");
const Post = require("../Models/postModel");

exports.createCommentController = async(req,res)=>{
    try{

        const {post,user,body} = req.body;

        //create comment objecy
        const comment = new Comment ({
            post,user,body
        })

        //put it in database (WE CAN ALSO USE Comment.create[Model.create] JUST exploring a different Way ! )

        const savedComment = await comment.save();

        //find the post by ID and update it's comments array
        const updatedPost = await Post.findByIdAndUpdate(
            post,
            { $push : {comments : savedComment._id} } , //$push is a update operator usd to insert
            {new : true} 
        )
        .populate("comments") //populate comments array with comment objects
        .exec();

        res.json({
            post:updatedPost
        });
    }
    catch(e)
    {
        console.log(e);
        return res.status(500).json("error while creating comment")
    }
}