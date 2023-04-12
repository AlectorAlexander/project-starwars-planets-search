const setStarWarsURL = 'https://swapi.dev/api/planets/';

async function fetchStarWars() {
  const response = await fetch(setStarWarsURL);
  const API = await response.json();
  return API;
}

export default fetchStarWars;
