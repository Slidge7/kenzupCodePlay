import { darkMode, lightMode } from "../../../constants/appColors";


const initialState = {
    colors: {},
    isDarkMode:false,
  };
  
  const uiManagerReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'TOGGLE_DARK_MODE':
        return {
          ...state,
          isDarkMode: !state.isDarkMode,
          colors: state.isDarkMode ? lightMode : darkMode // Update colors based on isDarkMode
        };
      default:
        return state;
    }
  };
  
  export default uiManagerReducer;
  