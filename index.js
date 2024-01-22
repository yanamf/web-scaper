
const PORT = 8000;
const axios = require ('axios');
const cheerio = require ('cheerio');
const express = require ('express');

const app = express();

axios('https://novini.bg/')
.then(response => {
    const html = response.data;
    const $ =  cheerio.load(html);
    const articles = [];
    $('.g-grid__item-title', html).each(function() {
       const title =  $(this).text()
       articles.push(title);
    });
    console.log(articles);

}).catch(err => console.log(err));

app.listen(PORT, () => console.log(`server running on ${PORT}`));