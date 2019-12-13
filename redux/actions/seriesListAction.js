import axios from 'axios';
import { SeriesListUpload } from '../actionTypes';

export const getSeriesPosts = () => dispatch =>
  axios({
    method: 'GET',
    url: `https://api.themoviedb.org/3/discover/tv?api_key=c18a8c63bee9d66665a486a624d48177&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false`,
    headers: []
  }).then(response => dispatch({ type: SeriesListUpload, payload: response.data }));