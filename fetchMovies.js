import fetch from 'node-fetch'

const API_BASE = 'https://plankton-app-xhkom.ondigitalocean.app/api';

export const fetchMovies = async () => {
    const res = await fetch(API_BASE + '/movies')
    const payload = await res.json()
    return payload.data
}

export const fetchMovie = async (id) => {
    const res = await fetch(API_BASE + '/movies/' + id)
    const payload = await res.json()
    return payload.data
}


