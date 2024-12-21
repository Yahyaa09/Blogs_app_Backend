
const Post = require("../Models/postModel");

exports.createPostController = async(req,res)=>{
    try{
        const {title,body} = req.body;

        //create new object
        const newPost = new Post ({
            title,body
        });

        //save in db
        await newPost.save();

        res.json({
            post:newPost
        });
    }
    catch(e)
    {
        console.log(e);
        return res.status(500).json("error while creating post")
    }
}

exports.getPostsController = async(req,res)=>{
    try{
        
        const allPosts = await Post.find({});

        res.json({
            post:allPosts
        });
    }
    catch(e)
    {
        console.log(e);
        return res.status(500).json("error while fetching posts")
    }
}