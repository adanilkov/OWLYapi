const express = require ('express');
const cors = require('cors');
const mongoose = require('mongoose')
mongoose.set('strictQuery', true);
const app = express();
const bodyPareser = require('body-parser');
const verify = require('./routes/verifyToken');
require('dotenv/config');


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