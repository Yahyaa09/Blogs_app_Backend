
const mongoose = require("mongoose");
require("dotenv").config();

const dbConnect = async (req,res)=>{

    mongoose.connect(process.env.DATABASE_URL)
    .then(() => {
        console.log("Connected to the database");
    })
    .catch((e) => {
        console.log("Couldn't connect to the database", e);
        process.exit(1);
    });
}

module.exports = dbConnect;