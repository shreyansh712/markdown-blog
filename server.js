const express = require('express')
const app = express()
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const articleRouter = require("./routes/articles");
app.set('view engine', 'ejs');
const port = 3000

mongoose.connect('mongodb://localhost/blog', {useNewUrlParser: true, useUnifiedTopology: true});

app.use(express.urlencoded({extended: false}));
app.use('/articles', articleRouter);


app.get('/', (req, res) => {
    const articles = [{
        title: "article title1",
        created: new Date(),
        description: "article description1"
    },

    {
        title: "article title2",
        created: new Date(),
        description: "article description2"
    }]

    res.render('articles/home', {articles: articles});
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})