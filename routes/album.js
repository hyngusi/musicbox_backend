const express = require('express');

const albumController = require('../controllers/albumController');

const router = express.Router();


// Authors Endpoints

// POST albums/
router.post('/', albumController.createAlbum);

// GET albums/
router.get('/', albumController.getAlbums);

// GET a Specific Album --- albums/:albumId
router.get('/:albumId', albumController.getAlbum);

// PUT or Update a Specific Album --- albums/:albumId
router.put('/:albumId', albumController.updateAlbum);

// DELETE a Specific Album --- albums/:albumsId
router.delete('/:albumId', albumController.removeAlbum);

module.exports = router;