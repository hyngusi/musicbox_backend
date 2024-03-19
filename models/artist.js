const mongoose = require('mongoose');

// Artist Schema
const ArtistSchema = new mongoose.Schema({
    artistName: { type: String, requre: true },
    nationality: { type: String, require: true },
    musics: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Music' }],
    album: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Album' }]
})

module.exports = mongoose.model('Artist', ArtistSchema)