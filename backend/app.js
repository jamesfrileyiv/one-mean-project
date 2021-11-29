const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: false}));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Headers', 
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
        "Access-Control-Allow-Methods", 
        "GET, POST, PATCH, DELETE, OPTIONS"
    );
    next();
})

app.post('/api/posts', (req, res, next) => {
    const post = req.body;
    console.log(post);
    res.status(201).json({message: "Post added successfully"});
});

app.use('/api/posts', (req, res, next) => {
    posts = [
        {
            id: "123dfao",
            title: "title 1",
            content: "content 1"
        },
        {
            id: "i3o24adf",
            title: "title 2",
            content: "content 2"
        },
        {
            id: "12ksdf9",
            title: "title 3",
            content: "content3"
        }
    ];
    res.status(200).json({
        message: "Posts fetched succesfully",
        posts: posts 
    });
});

module.exports = app;