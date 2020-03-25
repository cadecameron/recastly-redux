import Redux from 'redux';

var currentVideoReducer = (previousState = null, action) => {
  switch (action.type) {
    case 'CHANGE_VIDEO':
      return action.video || null;
    default:
      return previousState;
  }
};

export default currentVideoReducer;
