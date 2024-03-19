const _ = require('lodash');

const ArtistDal = require('../dal/artist')
const MusicDal = require('../dal/music')

// POST music --- /musics/
exports.createMusic = async (req, res, next) => {
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
exports.getMusics = async (req, res, next) => {
    try {
        console.log("sdsafsfsd")
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
exports.getMusic = (req, res, next) => {
    var musicId = req.params.musicId;

    MusicDal.get({ _id: musicId }, (err, music) => {
        if (err) {
            res.status(500);
            res.json({
                status: 500,
                type: 'GET_MUSIC_ERROR',
                message: err.message
            });
            return;
        }
        res.status(404);
        res.json(music || { message: "There is no music with this ID" });
    });
};

// PUT or Update a specific Music --- /musics/:musicId
exports.updateMusic = (req, res, next) => {

    var musicId = req.params.musicId;
    var body = req.body;

    MusicDal.update({ _id: musicId }, body, (err, music) => {

        if (err) {
            res.status(500);
            res.json({
                status: 500,
                type: 'UPDATE_MUSIC_ERROR',
                message: err.message
            });
            return;
        }

        res.status(404);
        res.json(music || { message: "Can not Update Music" });
    });
};

// DELETE or Remove a specific Music --- musics/:musicId
exports.removeMusic = (req, res, next) => {
    var musicId = req.params.musicId;

    // Option 2: Remove the artist and albums Music associated with this ID

    MusicDal.remove({ _id: musicId }, (err, music) => {

        if (err) {
            res.status(500);
            res.json({
                status: 500,
                type: 'REMOVE_MUSIC_ERROR',
                message: err.message
            });
            return;
        }

        res.status(404);
        res.json(music || { message: "Can not Remove Music" });
    });

};