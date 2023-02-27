const express = require('express')
const app = express()
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
    res.send('Hello World')
})
app.get('/about', function (req, res) {
    res.render("index")
})

app.listen(3000, () => {
    console.log('server is connected')
})