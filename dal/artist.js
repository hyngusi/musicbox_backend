const Artist = require('../models/artist');

// Create Artist
exports.create = (data) => {
    return Artist.create(data);
};

// Get Artist
exports.get = (query) => {
    return Artist.findOne(query)
        .populate([
            { path: 'musics', model: 'Music' },
            { path: 'albums', model: 'Album' }
        ]);
};

// Update Artist
exports.update = (id, data) => {
    return Artist.findByIdAndUpdate(id, data);
};

// Delete Artist
exports.remove = (id) => {
    return Artist.findByIdAndRemove(id);
};

// Get a collection of Artists
exports.getCollection = (query) => {
    return Artist.find(query);
};
