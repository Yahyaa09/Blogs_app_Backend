
const Like = require("../Models/likeModel");
const Post = require("../Models/postModel")

exports.likeController = async(req,res)=>{
    try{
        const {post,user} = req.body
        //find that post
        const findPost = await Post.findById(post)

        if(!findPost)
        {
            return res.status(404).json("Couldn't find the desired post")
        }

        //add in likes 
        const newLike = new Like ({post,user});

        const savedLike = await newLike.save();

        //add in likes array of post
        const updatedPost = await Post.findByIdAndUpdate(
                    post,
                    { $push : {likes : savedLike._id} } , //$push is a update operator usd to insert
                    {new : true} 
                )
                .populate("likes") //populate comments array with comment objects
                .exec();

        return res.status(200).json(
            {post:updatedPost}
        )

    }
    catch(e)
    {
        console.log(e);
        return res.status(500).json("error while liking post")
    }

}
   
exports.unlikeController = async (req, res) => {
    try {
        const { postId, likeId } = req.body;

        // Step 1: Delete the like document from the likes collection
        const deletedLike = await Like.findByIdAndDelete(likeId);

        if (!deletedLike) {
            return res.status(404).json("Like not found");
        }

        // Step 2: Update the post's likes array to remove the like ID
        const updatedPost = await Post.findByIdAndUpdate(
            postId,
            { $pull: { likes: likeId } }, // Remove the like ID from the likes array
            { new: true } // Return the updated post
        )
        .populate("likes") // Populate the likes array with like objects, if needed
        .exec();

        return res.status(200).json({
            post: updatedPost,
        });
    } catch (e) {
        console.log(e);
        return res.status(500).json("Error while unliking post");
    }
};
