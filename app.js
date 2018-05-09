const express = require('express');
const app = express();
const test_route = require('./routes/testroute');

const port = 9595;
app.set('view engine','ejs');

app.use('/',test_route);


app.listen(port, () => {
    console.log("application is running on port : 9595");
});