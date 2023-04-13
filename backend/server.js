require('dotenv').config();
const express = require('express');
const app = express();

app.get('/', (req,res) => {
    res.send('default route hit!');
});


app.listen(process.env.PORT, (req, res) => {

    console.log(`Listening on port ${process.env.PORT}`);

});
