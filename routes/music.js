const express = require('express')

const musicController = require('../controllers/musicController')

const router = express.Router()

// POST
router.post('/', musicController.createMusic);

// GET /musics/
router.get('/', musicController.getMusic)

// GET musics/:musicId
router.get('/:musicId', musicController.getMusic)

// PUT musics/:musicId
router.put('/:musicId', musicController.updateMusic);

// DELETE /musics/:musicId
router.delete('/:musicId', musicController.removeMusic);

module.exports = router