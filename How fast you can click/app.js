const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());


var highest = [];
var counts = 0;
var name = '';
var seconds = 0;


app.post('/', function (req, res) {

    name = req.query.Name
    console.log(name)


        return res.json({ Name: name });
    

   
});

app.post('/seconds', function (req, res) {

    seconds = req.query.seconds
    console.log(name, seconds)

    return res.json({ Name: name, Seconds: seconds });
});


app.get('/game', function (req, res) {
    return res.json({ Name: name, Seconds: seconds });
});

app.put('/Count', function (req, res) {

    counts = req.query.counts
    highest.push(parseInt(counts))

    const top = Math.max(...highest)
    return res.json({ Name: name, Seconds: seconds, topScore: top });
});

app.put('/Clear', function (req, res) {

    const top = Math.max(...highest)


    return res.json({Name: name, Seconds: seconds, topScore: top });



});

app.get('/load', function (req, res) {

    const top = Math.max(...highest)


    return res.json({Name: name, Seconds: seconds, attempts : highest,topScore: top });



});



// start server on port 8000
app.listen(8000, function () {
    console.log('CA3 listening on Port 8000');
});