const express = require('express');

const artistController = require('../controllers/artistController');

const router = express.Router();


// Authors Endpoints

// POST Artists
router.post('/', artistController.createArtist);

// GET /authors/
router.get('/', artistController.getArtists);

// GET Authors/:AuthorId
router.get('/:artistId', artistController.getArtist);

// PUT Authors/:AuthorId
router.put('/:artistId', artistController.updateArtist);

// DELETE /authors/:asuthorId
router.delete('/:artistId', artistController.removeArtist);

module.exports = router;