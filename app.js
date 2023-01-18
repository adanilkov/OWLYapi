const express = require ('express');
const mongoose = require('mongoose')
const cors = require('cors');
const app = express();
require('dotenv/config');
mongoose.set('strictQuery', true);
const bodyPareser = require('body-parser');
const verify = require('./routes/verifyToken');

//Middleware
app.use(cors());
app.use(bodyPareser.json());

//Import routes
const postsRoute = require('./routes/posts');
const authRoute = require ('./routes/auth');
app.use('/api/posts', verify, postsRoute);
app.use('/api/user', authRoute);

//Connect to db
mongoose.connect(process.env.DB_CONNECTION,
    {useNewUrlParser: true}, 
    () => console.log("Connected to MongoDB")
);

//Listen to server
app.listen(3000);