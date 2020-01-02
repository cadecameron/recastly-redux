import Redux from 'redux';

var videoListReducer = (previousState = sampleData, action) => {
  //TODO: define a reducer for the videoList field of our state.
  if (action.type === 'CHANGE_VIDEO_LIST') {
    return Object.assign({}, previousState, {
      videos: action.payload
    });
  } else {
    return previousState;
  }
};

export default videoListReducer;
