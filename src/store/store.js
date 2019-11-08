import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';
import exampleVideoData from '../data/exampleVideoData.js';

// The createStore method takes three arguments:
//  1. The root reducer (required)
//  2. The preloaded data (optional)
//  3. An enhancer--in this case applyMiddleware--with middleware you want to use as the argument

// Did not pass sample data as preloaded data due to errors in test
var preloadedData = {
  video: exampleVideoData[0],
  videos: exampleVideoData
};
var store = createStore(rootReducer, preloadedData, applyMiddleware(thunk));

export default store;
