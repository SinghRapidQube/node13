const express = require('express');
const app = express();


exports.wiki_get = (req, resp) => {
    resp.render("wiki");
};


exports.wiki_about = (req, resp) =>{
    resp.render("about");
};