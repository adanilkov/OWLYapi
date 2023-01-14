const express = require ('express');
const mongoose = require('mongoose')
const app = express();
require('dotenv/config');
mongoose.set('strictQuery', true);
const bodyPareser = require('body-parser');

//Middleware
app.use(bodyPareser.json());

//Import routes
const postsRoute = require('./routes/posts');
const authRoute = require ('./routes/auth');
app.use('/api/posts', postsRoute);
app.use('/api/user', authRoute);

//Connect to db
mongoose.connect(process.env.DB_CONNECTION,
    { useNewUrlParser: true }, 
    () => console.log("Connected to MongoDB")
);

//Listen to server
app.listen(3000);