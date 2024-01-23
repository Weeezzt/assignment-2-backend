const {fetchMovie, fetchMovies} = require('../fetchMovies')

const homeController = async (req, res) => {
    try {
        const movies = fetchMovies()
        res.status(200).render('home', {movies})
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

const moviePageController = async (req, res) => {
    try {
        const movie = fetchMovie(req.params.id)
        res.status(200).render('movie', {movie})
    } catch (error) {
        res.status(404).render('404')
    }
}

module.exports = {
    homeController, 
    moviePageController
}