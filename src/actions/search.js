import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';

// Redux does not handle async func by default

var handleVideoSearch = (q) => {
  // return a function that takes the dispatch as an parameter
  return dispatch => {
    var options = {
      key: YOUTUBE_API_KEY,
      query: q
    };
    // make async call inside func
    searchYouTube(options, videos => {
      // pass videos from callback to necessary actionMakers
      // and pass to dispatch
      dispatch(changeVideo(videos[0]));
      dispatch(changeVideoList(videos));
    });
  };
};

export default handleVideoSearch;
