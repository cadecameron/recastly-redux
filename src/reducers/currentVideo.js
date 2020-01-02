import Redux from 'redux';

var currentVideoReducer = (previousState = initialState, action) => {

  //TODO: define a reducer for the currentVideo field of our state.

  return Object.assign({}, previousState, {
    currentVideo: action.payload
  });
};

export default currentVideoReducer;
