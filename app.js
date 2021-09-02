const express = require('express');
const app = express();
const path = require('path');
const mainRouter = require('./routes/main');

app.use(express.static('public'));

/*configuracion de motor */
app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs');

app.use('/',mainRouter);

app.listen(3000, ()=>{
    console.log('servidor funcionando');
});