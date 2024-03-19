const artistRouter = require('./artist')
const musicRouter = require('./music')
const albumRouter = require('./album')
const root = require('./root')

module.exports = (app) => {
    app.use('/', root)
    // app.use('/artists', artistRouter)
    app.use('/musics', musicRouter)
    // app.use('/ablums', albumRouter)
}