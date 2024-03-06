const axios = require("axios");
const { YandexMusicApi } = require('yandex-music-api');

function getAuthorizationHeader(token) {
  return {
    Authorization: `Bearer ${token}`,
  };
}

async function searchMusic(query) {
  try {
    const token = process.env.YANDEX_MUSIC_TOKEN;

    const params = {
      text: query,
      type: "track",
    };

    const options = {
      params,
      headers: getAuthorizationHeader(token),
    };

    const response = await axios.get(
      "https://api.music.yandex.net/search",
      options
    )
    .catch(function (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser 
        // and an instance of http.ClientRequest in node.js
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
    });

    return response.data;
  } catch (error) {
    console.error("Error searching music:", error);
    throw error;
  }
}

module.exports = { searchMusic };