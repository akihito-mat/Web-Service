const express = require('express');
const path = require('path');
const app = express();
// console.log(__dirname);

app.use(express.static(path.join(__dirname,'public')));
app.get('/', function (req, res) {
    console.log(req);
    res.send('<h1>Topページ!</h1>')
})

app.get('/about', function (req, res) {
    res.send('Aboutページ')
  })

app.listen(3000, function () {
    console.log('I am running');
})

console.log('最終行')