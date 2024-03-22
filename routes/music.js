const express = require('express')

const musicController = require('../controllers/musicController')

const router = express.Router()

// POST
router.post('/add', musicController.createMusic);

// GET /musics/
router.get('/get', musicController.getMusics)

// GET musics/:musicId
router.get('/get/:musicId', musicController.getMusic)

// PUT musics/:musicId
router.put('/put/:musicId', musicController.updateMusic);

// DELETE /musics/:musicId
router.delete('/delete/:musicId', musicController.removeMusic);

module.exports = router