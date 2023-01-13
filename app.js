const express = require ('express');
const mongoose = require('mongoose')
const app = express();
require('dotenv/config');
mongoose.set('strictQuery', true);
const bodyPareser = require('body-parser');

app.use(bodyPareser.json());

//import routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

//routes
app.get('/', (req, res) => {
    res.send('we are on home')
})

//connect to db
mongoose.connect(process.env.DB_CONNECTION,
    { useNewUrlParser: true }, 
    () => console.log("Connected to MongoDB")
);

//listening to server
app.listen(3000);