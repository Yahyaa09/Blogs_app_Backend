

const mongoose = require("mongoose");

//route Handler

const likeSchema = new mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "Post"  // refernce to the post Model
    },

    user:{
        type:String,
        required : true
    }
});


module.exports = mongoose.model("Like",likeSchema);