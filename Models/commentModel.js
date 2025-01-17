
const mongoose = require("mongoose");

//route Handler

const commentSchema = new mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "Post"  // refernce to the post Model
    },

    user:{
        type:String,
        required : true
    },

    body:{
        type:String,
        required : true
    }
});


module.exports = mongoose.model("Comment",commentSchema);