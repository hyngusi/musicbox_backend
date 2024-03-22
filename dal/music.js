const artist = require('../models/artist');
const Music = require('../models/music');

// Create music
exports.create = async (data) => {
    try {
        const music = await Music.create(data);
        return music;
    } catch (err) {
        throw err;
    }
}

// Get Music Collections
exports.getCollection = async (query) => {
    try {
        const musicCollection = await Music.find(query).exec();
        return musicCollection
    } catch (err) {
        throw err;
    }
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
        // console.log(data[0]['id'])
        const updatedMusic = await Music.findOneAndUpdate(
            { id: id },
            { title: data[0].title, link: data[0].link },
            { new: true } // Tùy chọn để trả về tài liệu sau khi cập nhật 
        )
        if (!updatedMusic) {
            throw new Error("Update: Music not found")
        }
        return updatedMusic
    } catch (err) {
        throw err;
    }
};

// Delete a Music
exports.remove = async (id) => {
    try {
        const deletedMusic = await Music.findOneAndDelete({ id: id }).exec();
        if (!deletedMusic) {
            throw new Error("Delete: Music not found")
        }
        return deletedMusic
    } catch (err) {
        return err
    }
};

