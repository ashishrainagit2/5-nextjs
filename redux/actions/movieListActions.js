import axios from 'axios';
import { MovieListUpload } from '../actionTypes';

export const getPosts = (num) => {
    console.log("get post action called with num = ",  num);
    return dispatch =>
    axios({
      method: 'GET',
      url: `https://api.themoviedb.org/3/movie/popular?api_key=c18a8c63bee9d66665a486a624d48177&language=en-US&page=${num}`,
      headers: []
    }).then(response => dispatch({ type: MovieListUpload, payload: response.data }));
}