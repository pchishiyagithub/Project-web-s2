const express = require('express');
const app = express();
require('dotenv/config');
const api = process.env.API_URL;
const bodyParser = require('body-parser');
const morgan = require('morgan');
//middleware
app.use(bodyParser.json());
app.use(morgan('tiny'));



/*http:/localhost:3000/api/v1/products*/
app.get(`${api}/products`, (req, res) =>{
    const product = {
        id: 1,
        name: 'Clothes' ,
        image: 'some-url',
    }
    res.send(product);
});

app.listen(3000, ()=>{
    console.log(api);
    console.log('server is runnig http://localhost:3000');

})