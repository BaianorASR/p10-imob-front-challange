import axios from 'axios';

const postAPI = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/posts',
});

export default postAPI;
