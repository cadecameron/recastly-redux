import Redux from 'redux';

var videoListReducer = (previousState = [], action) => {
  //TODO: define a reducer for the videoList field of our state.
  switch (action.type) {
    case 'CHANGE_VIDEO_LIST':
      return action.videos || [];
    default:
      return previousState;
  }
};

export default videoListReducer;
