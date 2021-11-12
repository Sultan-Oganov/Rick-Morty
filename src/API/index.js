const url = 'https://rickandmortyapi.com/api/';

const getApiData = async (endPoint, method, data) => {
    const request = await fetch(`${url}${endPoint}`,
        {
            method: method,
            headers: {
                "accept": "application/json",
                "Content-Type": "application/json",
            },
            body: data ? JSON.stringify(data) : null
        }
    );
    return await request.json();
}

export const charactersAPI = {
    getAllCharacters(currentPage = 1, species = '', status = '', gender = '') {
        return getApiData(`character/?page=${currentPage}&species=${species}&status=${status}&gender=${gender}`, 'GET')
    },
    getFilteredCharacters(currentPage = 1, species = '', status = '', gender = '') {
        return getApiData(`character/?page=${currentPage}&species=${species}&status=${status}&gender=${gender}`, 'GET')
    }
}

export const locationsAPI = {
    getAllLocations() {
        return getApiData(`location/`, 'GET')
    },
    getCharactersOfLocation(characters = '') {
        return getApiData(`character/${characters}`, 'GET')
    },
    getFilteredLocations(currentPage = 1, name = '', type = '', dimension = '') {
        return getApiData(`location/?page=${currentPage}&name=${name}&type=${type}&dimension=${dimension}`, 'GET')
    }
}

export const episodesAPI = {
    getAllEpisodes() {
        return getApiData(`episode/`, 'GET')
    },
    getCharactersOfEpisode(characters = '') {
        return getApiData(`character/${characters}`, 'GET')
    },
    getFilteredEpisode(currentPage = 1, name = '') {
        return getApiData(`episode/?page=${currentPage}&name=${name}`, 'GET')
    }
}