import axios from "axios";

function getCharacters() {
  return axios
    .get("https://rickandmortyapi.com/api/character")
    .then((response) => {
      return response.data;
    });
}
function getCharacterById(id) {
  return axios
    .get("https://rickandmortyapi.com/api/character/" + id)
    .then((response) => {
      return response.data;
    });
}

function getEpisode() {
  return axios.get("https://rickandmortyapi.com/api/episode")
  .then(response => {
    return response.data;
  });
}


export { getCharacters, getCharacterById, getEpisode };
