const express = require('express');
const app = express();
require('dotenv').config();

const youtube = require('./routes/youtube');
app.use('/youtube', youtube);

app.listen(process.env.PORT, () => {
    console.log(`Example app listening at http://localhost:${process.env.PORT}`);
});