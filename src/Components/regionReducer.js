// regionReducer.js
// regionReducer.js
const initialState = {
    selectedRegion: null,
  };
  
  const regionReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_SELECTED_REGION':
        return {
          ...state,
          selectedRegion: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default regionReducer;
  
  