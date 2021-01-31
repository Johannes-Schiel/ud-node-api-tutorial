const express = require('express');
const router = express.Router();
const fs = require("fs");
const axios = require('axios');

const cacheName = 'youtube.json';
const cache = './cache';
const cacheTime = 60 * 60 * 1000; // <- 1h

const readJsonCache = (name) => {
    try {
        return JSON.parse(fs.readFileSync(`${cache}/${name}`, `utf-8`))
    } catch (err) {
        return undefined;
    }
}

const writeJsonCache = (name, data) => {
    if (!fs.existsSync(cache)) {
        fs.mkdirSync(cache);
    }
    fs.writeFile(`${cache}/${name}`, JSON.stringify(data),(err) => {
        if (err) console.log( err );
    });
}

const cacheIsToOld = (date) => {
    return (new Date().getTime()) - new Date(date) > cacheTime;
}

router.get('/', function (req, res, next) {
    console.log('\x1b[36m GET \x1b[32m 200 \x1b[0m /youtube');

    const cachedData = readJsonCache(cacheName);

    if (!cachedData || cacheIsToOld(cachedData.date)) {
        axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=statistics&id=${process.env.YOUTUBE_ID}&key=${process.env.YOUTUBE_KEY}`).then(response => {
            const { statistics } = response.data.items[0];
            const data = {
                date: new Date().getTime(),
                data: statistics
            };
            writeJsonCache(cacheName, data);
            res.json(statistics);
        });
    } else {
        res.json(cachedData.data);
    }
});

module.exports = router;