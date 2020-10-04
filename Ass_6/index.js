const express = require('express')

const app = express();
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('hello world');

});

app.listen(3000, () => {
    console.log("Listening on localhost:1337");
})