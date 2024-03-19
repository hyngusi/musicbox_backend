const Music = require('../models/music')

// Create music
exports.create = (data, cb) => {
    return Music.create(data, cb);
};

// Get music
exports.get = async (query) => {
    try {
        const music = await Music.findOne(query).populate([
            {
                path: 'artist',
                model: 'Artist'
            },
            {
                path: 'album',
                model: 'Album'
            }
        ]).exec();
        return music;
    } catch (err) {
        throw err; // Ném lỗi để xử lý ở nơi gọi hàm
    }
};

// Update a Music
exports.update = async (id, data) => {
    try {
        const updatedMusic = await Music.findByIdAndUpdate(id, data, { new: true }).exec();
    } catch (err) {
        throw err;
    }
};

// Delete a Music
exports.remove = async (id) => {
    try {
        const deletedMusic = await Music.findByIdAndRemove(id).exec();
        return true
    } catch (err) {
        throw err;
    }
};

// Get Music Collections
exports.getCollection = async (query) => {
    try {
        console.log('run get coolection')
        const musicCollection = await Music.find(query).exec();
        return musicCollection
    } catch (err) {
        throw err;
    }
};
