const mongoose = require('mongoose');

const AlbumSchema = new mongoose.Schema({
    id: { type: String, require: true },
    album_name: { type: String },
    thumbnail: { type: String },
    artist: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Artist' }],
    musics: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Music' }],
})

module.exports = mongoose.model('Album', AlbumSchema);