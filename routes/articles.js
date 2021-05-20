const express = require('express');
const Article = require("./..models/articles")
const router = express.Router();

router.get("/new",function(req,res){
    res.render('articles/new');
})

router.post("/", (req,res)=>{
const article = new Article({
    title: req.body.title,
    description: req.body.description,
    markdown: req.body.markdown,
})
article.save();
})

module.exports = router;