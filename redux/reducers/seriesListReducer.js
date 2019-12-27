import { SeriesListUpload } from '../actionTypes';

const reducer = (state = {details : 'Loading....'  }, action) => {
    switch (action.type) {
        case SeriesListUpload:
            let changed = {details : action.payload }
            return { ...state, ...changed};
        default:
            return state;
    }
};

export default reducer;