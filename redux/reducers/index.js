import { combineReducers } from 'redux';
import movieList from './movieListReducer';
import SeriesList from './seriesListReducer';

const rootReducer = combineReducers({
    movieList: movieList,
    SeriesList : SeriesList
});

export default rootReducer;