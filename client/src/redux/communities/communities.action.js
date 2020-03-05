import axios from 'axios';
import CommunitiesActionTypes from './communities.action-types';

export const fetchCommunities = () => async dispatch => {
    const res = await axios.get('/api/communities');
    
    dispatch({type: CommunitiesActionTypes.FETCH_COMMUNITIES, payload: res.data});
}

export const fetchCommunitiesAverage = () => async dispatch => {
    const res = await axios.get('/api/average');
    
    dispatch({type: CommunitiesActionTypes.FETCH_AVERAGE, payload: res.data});
}