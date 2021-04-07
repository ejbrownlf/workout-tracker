const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.use('/api', require('./routes/apiRoutes'))
app.use(require('./routes/htmlRoutes'));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/wrkkouttracker", { useNewUrlParser: true });


app.listen(3333, () => {
    console.log('Listening on port 3000');
});