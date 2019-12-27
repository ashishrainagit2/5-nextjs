import { MovieListUpload } from '../actionTypes';

const reducer = (state = {details : 'Loading...'  }, action) => {
    switch (action.type) {
        case MovieListUpload:
             console.dir( action);
            let changed = {details : action.payload }
            return { ...state, ...changed};
        default:
            return state;
    }
};

export default reducer;