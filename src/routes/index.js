const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>{
    res.render('index.html', {title:'First WEB'});
//res.sendFile(path.join(__dirname, 'views/index.html'));
//console.log(__dirname + '/views/index.html');

});

router.get('/contact', (req, res) =>{
    res.render('contact.html', {title:'contact page......'});
//res.sendFile(path.join(__dirname, 'views/index.html'));
//console.log(__dirname + '/views/index.html');

});

module.exports = router;