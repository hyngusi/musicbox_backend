const mongoose = require('mongoose');

// Music Schema
const MusicSchema = new mongoose.Schema({
    id: { type: String, require: true },
    title: { type: String, require: true },
    artistsNames: { type: String, require: true },
    artist: [{ type: mongoose.Schema.Types.ObjectId, default: 'Unknown Artist' }],
    thumbnail: { type: String, require: true },
    thumbnailMini: { type: String, require: true },
    duration: { type: Number, require: true },
    link: { type: String, require: true },
    album: [{ type: mongoose.Schema.Types.ObjectId, default: 'Unknown Album' }],
});

module.exports = mongoose.model('Music', MusicSchema)

