import { combineReducers } from 'redux';
import communitiesReducer from './communities/communities.reducer';

const rootReducer = combineReducers({
    communities: communitiesReducer
});

export default rootReducer;