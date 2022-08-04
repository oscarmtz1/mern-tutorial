import mongoose from 'mongoose';

//here we define the different properties of each post
const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
});

//turns schema into model
var PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;