'use strict';

const express       = require('express');
const helmet 	    = require('helmet');
const cors          = require('cors');
const consign       = require('consign');

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));


consign().include('./src/routes').into(app);

module.exports = app;