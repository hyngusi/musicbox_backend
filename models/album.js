const mongoose = require('mongoose');

const AlbumSchema = new mongoose.Schema({
    album_name: { type: String },
    artist: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Artist' }],
    musics: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Music' }],
})

module.exports = mongoose.model('Album', AlbumSchema);