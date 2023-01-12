const express = require ('express');
const app = express();


//app.use(auth)

//routes
app.get('/', (req, res) => {
    res.send('we are on home')
})




//listening to server
app.listen(3000);