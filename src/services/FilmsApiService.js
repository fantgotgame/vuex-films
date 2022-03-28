import axios from 'axios';

const url = 'http://kinopoiskapiunofficial.tech';
const headers = {
  'X-API-KEY': 'cdca403d-a884-464d-b5c6-34244f3c198a',
  'Content-Type': 'application/json',
};

export default {
  getPremieres () {
    return axios.get(`${url}/api/v2.2/films/premieres`, {
      headers: headers,
      params: {
        year: 2022,
        month: 'APRIL'
      }
    });
  }
};