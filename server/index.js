import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

import postRoutes from './routes/posts.js';

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const postRoutes = require('./routes/posts.js')

const app = express();

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

//
//first parameter is path for all routes
app.use('/posts', postRoutes);

const CONNECTION_URL = "mongodb+srv://admin:admin123@cluster0.x4owskd.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

//connects to mongodb database
mongoose.connect(CONNECTION_URL, {useNewUrlParser:true, useUnifiedTopology:true})
    .then(() => app.listen(PORT,()=>console.log(`Server running on port ${PORT}`)))
    .catch((error)=>console.log(error.message));

//deprecated code, no longer necessary
//mongoose.set('useFindAndModify', false);