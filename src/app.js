'use strict'
const express = require('express');

const app = express();
const router = express.Router();

const route = router.get("/",(req,res,next)=>{
    res.status(200).send({
        title: "UCDb API",
        version: "0.0.2"
    });
});

app.use('/', route);

module.exports = app;