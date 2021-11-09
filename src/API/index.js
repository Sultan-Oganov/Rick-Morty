import * as axios from "axios"

const instanse = axios.create({
    baseURL: 'https://rickandmortyapi.com/api/',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json',
    }
})

export const charactersAPI = {
    getAllCharacters(currentPage = 1, species = '', status = '', gender = '') {
        return instanse.get(`character/?page=${currentPage}&species=${species}&status=${status}&gender=${gender}`)
    },
    getFilteredCharacters(currentPage = 1, species = '', status = '', gender = '') {
        return instanse.get(`character/?page=${currentPage}&species=${species}&status=${status}&gender=${gender}`)
    }
}

export const locationsAPI = {
    getAllLocations() {
        return instanse.get(`location/`)
    },
}

export const episodesAPI = {
    getAllEpisodes() {
        return instanse.get(`episode/`)
    },
    getCharactersOfEpisode(characters = '') {
        return instanse.get(`character/${characters}`)
    },
    getFilteredEpisode(currentPage = 1, name = '') {
        return instanse.get(`episode/?page=${currentPage}&name=${name}`)
    }
}