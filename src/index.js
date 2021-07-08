'use strict';

const express       = require('express');
const bodyParser    = require('body-parser');
const helmet 	    = require('helmet');
const cors          = require('cors');
const consign       = require('consign');

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());


consign().include('./src/routes').into(app);

app.listen(8044,"127.0.0.1");

module.exports = app;