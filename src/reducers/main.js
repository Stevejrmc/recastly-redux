import { combineReducers } from 'redux';
import currentVideo from './currentVideo.js';
import videoList from './videoList.js';

// The combineReducers method takes an object with the keys
// set to the value of the reducers
var rootReducer = combineReducers({ video: currentVideo, videos: videoList });

export default rootReducer;
