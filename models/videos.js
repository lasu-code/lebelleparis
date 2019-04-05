let mongoose = require("mongoose");
const bcrypt = require("bcrypt-nodejs");

let Schema = mongoose.Schema;

let videoSchema = new Schema({
    vTitle: { type: String },
    vUrl: { type: String },
    vImage: { type: String },
    vCategory: { type: String },
    vdetails: {type: String},
    createdDate: {
        type: Date,
        default: Date.now
    },
    resetPasswordToken: String,
    resetPasswordExpires: Date
});



module.exports = mongoose.model("Video", videoSchema);
