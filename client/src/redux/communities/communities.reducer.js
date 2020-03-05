import CommunitiesActionTypes from './communities.action-types';

const INITIAL_STATE = {
    communities: null,
    averages: null
}

const communitiesReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CommunitiesActionTypes.FETCH_COMMUNITIES:
            return {
                ...state,
                communities: action.payload
            };   
        case CommunitiesActionTypes.FETCH_AVERAGE:
            return {
                ...state,
                averages: action.payload
            }
         default:
             return state;   
    }
}

export default communitiesReducer;