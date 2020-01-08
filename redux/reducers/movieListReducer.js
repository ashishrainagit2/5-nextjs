import { MovieListUpload } from '../actionTypes';


const initialState = {
    details : 'Loading...',
    pageNumber : 0
}

const reducer = (state = initialState, action, ) => {
    switch (action.type) {
        case MovieListUpload:
            console.log("reducer")
             console.dir( action);
            let detailsUpdated = action.payload 
            let updatedPageNumber = state.pageNumber + 1

            return { ...state, 
                    details : detailsUpdated,
                    pageNumber : updatedPageNumber
                    };
        default:
            return state;
    }
};

export default reducer;