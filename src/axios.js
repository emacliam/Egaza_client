import axios from 'axios';
axios.defaults.baseURL = 'https://egaza.herokuapp.com/';

var instance = axios.create({
  xsrfCookieName: 'mytoken',
  xsrfHeaderName: 'csrf-token',
});

export default instance;
