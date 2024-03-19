const express = require('express')

const router = express.Router()

// Defined CRUD Operations
router.get('/', (req, res) => {
    res.json({
        message: 'Music API is Live'
    })
});

module.exports = router