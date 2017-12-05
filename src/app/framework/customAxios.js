import axios from 'axios';

var instance = axios.create({
  headers: {
    Accept: 'application/json'
  }
});

export default instance;
