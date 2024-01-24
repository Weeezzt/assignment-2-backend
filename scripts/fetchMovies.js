import fetch from 'node-fetch'

const API_BASE = 'https://plankton-app-xhkom.ondigitalocean.app/api';

export const fetchMovies = async () => {
    const res = await fetch(API_BASE + '/movies')
    const payload = await res.json()
    const modifiedArr = payload.data.map((obj) => {
        return {
            id: obj.id,
            ...obj.attributes,
        }
    })
    return modifiedArr
}

export const fetchMovie = async (id) => {
    try {
        const res = await fetch(API_BASE + '/movies/' + id)
        const payload = await res.json()
        if(payload.data) {
            return {
                id: payload.data.id,
                ...payload.data.attributes,
            }
        }
    } catch(error) {
        return error
    }
}


