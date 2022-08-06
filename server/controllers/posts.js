//handlers for routes go here
//gives access to models
import mongoose from 'mongoose';
import PostMessage from '../models/postMessage.js';

//async function, requires declaring async and await
export const getPosts = async (req, res) =>{
    try{
        
        const postMessages = await PostMessage.find();

        console.log(postMessages);

        res.status(200).json(postMessages);
    }
    catch(error){
        res.status(404).json({ message: error.message });
    }
}

export const createPost = async (req, res) =>{
    const body = req.body;
    const newPost = new PostMessage(body);
    try{
        await newPost.save();
        res.status(201).json(newPost);
    } catch(error){
        res.status(409).json({ message:error })
    }
}

// export const createPost = async (req, res) => {
//     const { title, message, selectedFile, creator, tags } = req.body;

//     const newPostMessage = new PostMessage({ title, message, selectedFile, creator, tags })

//     try {
//         await newPostMessage.save();

//         res.status(201).json(newPostMessage );
//     } catch (error) {
//         res.status(409).json({ message: error.message });
//     }
// }

export const updatePost = async (req, res) =>{
    const { id } = req.params;
    const post = req.body;
    

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No post with that id");
    const updatedPost = post;
    await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true });
    res.json(updatedPost);
}

// export const updatePost = async (req, res) => {
//     const { id } = req.params;
//     const { title, message, creator, selectedFile, tags } = req.body;
    
//     if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
//     const updatedPost = { creator, title, message, tags, selectedFile, _id: id };
//     await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true });

//     res.json(updatedPost);
// }

export const deletePost = async (req, res) =>{
    const { id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No post with that id");

    await PostMessage.findByIdAndRemove(id);

    res.json({ message: 'Post deletd successfully' })
}