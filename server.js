const express = require('express')
const app = express()
app.set('view engine', 'ejs');
const port = 3000

app.get('/', (req, res) => {
    res.render('home');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})