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
    getAllCharacters() {
        return instanse.get(`character/`)
    },
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
}