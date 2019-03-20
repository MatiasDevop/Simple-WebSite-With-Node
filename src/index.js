const express = require('express');
const app= express();
const path = require('path');
// settings
//app.set('port', 3000); or could be down
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
//also we use html extension with this setting
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
// we use
//middlewares functions

// routes
app.use(require('./routes/index'));//./routes
//static files
app.use(express.static(path.join(__dirname, 'public')));


//listening the server
app.listen(app.get('port'), ()=>{
    console.log('server port', app.get('port'));
});