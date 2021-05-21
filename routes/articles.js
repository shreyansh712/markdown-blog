const express = require('express');
const Article = require("./../routes/articles.js")
const router = express.Router();

router.get("/new",function(req,res){
    res.render('articles/new');
})

router.get("/:id",(req,res)=>{

})

router.post("/", async(req,res)=>{
const article = new Article({
    title: req.body.title,
    description: req.body.description,
    markdown: req.body.markdown,
})
try{
 article = await article.save();
 res.redirect(`/articles/${article.id}`)
}
catch(e){
   res.render('articles/new', { article: article}) 
}
})

router.get("/",(req,res)=>{
    console.log("hello");
})

module.exports = router;