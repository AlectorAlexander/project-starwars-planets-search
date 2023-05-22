import axios from "axios";

const setStarWarsURL = "https://swapi.dev/api/planets/";

async function fetchStarWars() {
    const response = await axios.get(setStarWarsURL);
    return response.data;
}

export default fetchStarWars;
