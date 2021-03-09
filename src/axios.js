import axios from 'axios';
import store from './store';
axios.defaults.baseURL =
  /* 'http://localhost:8080/' */ 'https://egaza.herokuapp.com/';

const token = localStorage.getItem('token');

var instance = axios.create({
  xsrfCookieName: 'mytoken',
  xsrfHeaderName: 'csrf-token',
});
if (token) {
  // Alter defaults after instance has been created
  instance.defaults.headers.common['Authorization'] = token;
}

export default instance;
