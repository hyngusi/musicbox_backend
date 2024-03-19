const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')

const config = require('./config/config')
var router = require('./routes')

const app = express()

app.use(cors())

// Start server
const port = config.APP_PORT || process.env.port
app.listen(port, () => {
    console.log(`API server running on ${port}`)
})

// Định nghĩa options
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

//Connect to MongoDB
mongoose.connect(config.MongoURL, options)
    .then(() => {
        console.log('Connected to MongoDB successfully');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });


// Parser JSON body Requests
app.use(bodyParser.json())

// Pass app to router
router(app)

