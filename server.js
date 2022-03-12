const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
//const cookieParser = require('cookie-parser');
const cors = require('cors');
require('dotenv').config();

//app
const app = express();

//middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
//app.use(cookieParser());

//connect app to database
mongoose
.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}) // Adding new mongo url parser
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err));

//cors
if(process.env.NODE_ENV === 'development'){
    app.use(cors({ origin: `${process.env.CLIENT_URL}` }));
}

app.get('/' , (req,res) => {
    res.send('Welcome to CapitalMovies API')
})

//port
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});