import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';

var mapStateToProps = state => {
  return {
    videos: state.videos
  };
};

// dispatch actions
var mapDispatchToProps = dispatch => {
  return {
    handleVideoListEntryTitleClick: video => {
      dispatch(changeVideo(video));
    }
  };
};
var VideoListContainer = connect(mapStateToProps, mapDispatchToProps)(VideoList);

export default VideoListContainer;
