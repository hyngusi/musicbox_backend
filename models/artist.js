const mongoose = require('mongoose');

// Artist Schema
const ArtistSchema = new mongoose.Schema({
    id: { type: String, requre: true },
    name: { type: String, requre: true },
    thumbnail: { type: String, requre: true },
    musics: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Music' }],
    album: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Album' }]
})

module.exports = mongoose.model('Artist', ArtistSchema)