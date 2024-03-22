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
        console.log(data[0]['id'])
        const updatedMusic = await Music.findOneAndUpdate(
            { id: id },
            { title: data[0].title, link: data[0].link, artist: data[0].artist, album: data[0].album },
            { new: true } // Tùy chọn để trả về tài liệu sau khi cập nhật 
            //và loại bỏ các trường không xác định
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
        const deletedMusic = await Music.findByIdAndDelete(id).exec();
        return true
    } catch (err) {
        throw err;
    }
};

