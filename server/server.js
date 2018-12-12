//S13 L135
const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;//use the heroku port if it exist if not use 3000

app.use(express.static(publicPath));

//get() lets us set up a function to run when someone sends a get req to our server,
//two arguments
//1) path -> we can use * to match all unmatched route
//2) a function to run
//    a) req object contains info about the request
//    b) res object lets us manipulate the response our express server makes to whoever made the http req
app.get('*', (req, res)=>{
    res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port,()=>{
    console.log("server is up");
});

