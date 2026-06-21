const axios = require('axios');

const authenticate = () => {
  return axios.post('https://api.github.com/app/installations', {
    client_id: process.env.APP_ID,
    client_secret: process.env.CLIENT_SECRET
  })
    .then((response) => {
      return response.data.token;
    })
    .catch((error) => {
      throw error;
    });
};

module.exports = {
  authenticate
};