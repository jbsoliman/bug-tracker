const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());

app.set('view engine', 'ejs');
app.set('views', './src/pages');

app.use(express.urlencoded({ extended: false }));

app.use('/static', express.static(path.join(`${__dirname}/public`)));

app.get('/', (req, res) => res.send('TRINA'));

const port = process.env.PORT || 8080;

// change this URI using: mongodb+srv://DBUSER:<password>@cluster0.hh9ki.mongodb.net/<dbname>?retryWrites=true&w=majority
// change DBUSER if needed <password> and and <dbname>
const uri = "mongodb+srv://DBUSER:hmN1v8EFtCJGWPkw@cluster0.hh9ki.mongodb.net/sample_airbnb?retryWrites=true&w=majority";

mongoose
    .connect(uri, {
        useCreateIndex: true,
        useUnifiedTopology: true,
        useNewUrlParser: true,
      useFindAndModify: false,
    })
    .then(() => {
        app.listen(port, () => console.log(`Server and Database running on ${port}, http://localhost:${port}`));
    })
    .catch((err) => {
        console.log(err);
    });