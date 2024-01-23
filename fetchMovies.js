const fetch = require('node-fetch')

const API_BASE = 'https://plankton-app-xhkom.ondigitalocean.app/api';

const fetchMovies = async () => {
    const res = await fetch(API_BASE + '/movies')
    const payload = await res.json()
    return payload.data
}

const fetchMovie = async (id) => {
    const res = await fetch(API_BASE + '/movies/' + id)
    const payload = await res.json()
    return payload.data
}

module.exports = {
    fetchMovies,
    fetchMovie
}
