const _ = require('lodash');

const ArtistDal = require('../dal/artist')
const MusicDal = require('../dal/music')

// POST music --- /musics/
exports.createMusic = async (req, res) => {
    try {
        let body = req.body;

        // Tạo âm nhạc mới
        const music = await MusicDal.create(body);

        // Tìm nghệ sĩ tương ứng với âm nhạc mới được tạo
        // const artist = await ArtistDal.get({ _id: music.artist });

        // Cập nhật danh sách âm nhạc của nghệ sĩ
        // artist.musics.push(music._id);
        // await ArtistDal.update({ _id: artist._id }, { musics: artist.musics });

        // Trả về âm nhạc mới đã được tạo
        console.log('Music saved successfully:', music);
        return res.status(201).json(music);
    } catch (error) {
        // Xử lý lỗi
        console.error("Error creating music:", error);
        res.status(500).json({
            status: 500,
            type: 'CREATE_MUSIC_ERROR',
            message: error.message
        });
    }
};


// GET Musics --- musics/
exports.getMusics = async (req, res) => {
    try {
        const musics = await MusicDal.getCollection({});
        if (!musics || musics.length === 0) {
            res.status(404).json({ message: "No Music Found" });
            return;
        }
        res.json(musics);
    } catch (err) {
        res.status(500).json({
            status: 500,
            type: 'GET_MUSICS_ERROR',
            message: err.message
        });
    }
};


// GET a Specific Music --- /musics/:musicId
exports.getMusic = (req, res) => {
    try {
        const musicId = req.params.musicId
        const music = MusicDal.get({ id: musicId })
        if (!music) {
            res.status(400).json({ message: "There is no music with this ID" })
            return
        }
        res.json(music);
    } catch (err) {
        res.status(500).json({
            status: 500,
            type: 'GET_MUSIC_ID_ERROR',
            message: err.message
        })
    }
};

// PUT or Update a specific Music --- /musics/:musicId
exports.updateMusic = async (req, res) => {
    try {
        const musicId = req.params.musicId;
        const body = req.body;

        const music = await MusicDal.update(musicId, body)
        console.log(music)
        if (!music) {
            res.status(500).json({
                status: 500,
                type: 'UPDATE_MUSIC_ERROR',
                message: err.message
            })
            return;
        }
        res.json(music)
    } catch (err) {
        res.status(500).json({
            status: 500,
            type: 'PUT_MUSIC_ID_ERROR',
            message: err.message
        })
    }
};

// DELETE or Remove a specific Music --- musics/:musicId
exports.removeMusic = async (req, res) => {
    const musicId = req.params.musicId;

    // Option 2: Remove the artist and albums Music associated with this ID
    try {
        const music = await MusicDal.remove(musicId)
        if (!music) {
            res.status(400).json({ message: "There is no music with this ID" })
            return
        }
        res.json(music);
    }
    catch (err) {
        res.status(500).json({
            status: 500,
            type: 'DELETE_MUSIC_ID_ERROR',
            message: err.message
        })
    }
};