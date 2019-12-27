import axios from 'axios';
import { MovieListUpload } from '../actionTypes';

export const getPosts = () => {
    console.log("movie list actions");
    return dispatch =>
    axios({
      method: 'GET',
      url: `https://api.themoviedb.org/3/movie/popular?api_key=c18a8c63bee9d66665a486a624d48177&language=en-US&page=1`,
      headers: []
    }).then(response => dispatch({ type: MovieListUpload, payload: response.data }));
}