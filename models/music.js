const mongoose = require('mongoose');

// Music Schema
const MusicSchema = new mongoose.Schema({
    id: { type: String, require: true },
    title: { type: String, require: true },
    link: { type: String, require: true },
    artist: [{ type: mongoose.Schema.Types.ObjectId, default: 'Unknown Artist' }],
    album: [{ type: mongoose.Schema.Types.ObjectId, default: 'Unknown Album' }],
    date_created: { type: Date },
    duration: { type: Number, require: true }
});

module.exports = mongoose.model('Music', MusicSchema)

