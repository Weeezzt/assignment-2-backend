import {fetchMovie, fetchMovies} from '../fetchMovies.js'

export const homeController = async (req, res) => {
    try {
        const movies =  await fetchMovies()
        console.log(movies)
        res.status(200).render('home', {movies})
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

export const moviePageController = async (req, res) => {
    try {
        const movie = await fetchMovie(req.params.id)
        if(movie) {
            res.status(200).render('movie', {movie})
        } else {
            res.status(404).render('404')
        }
    } catch(error) {
        console.log(error.message)
    } 
}

