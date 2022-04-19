const setStarWarsURL = 'https://swapi-trybe.herokuapp.com/api/planets/';

async function fetchStarWars() {
  const response = await fetch(setStarWarsURL);
  const API = await response.json();
  return API;
}

export default fetchStarWars;
