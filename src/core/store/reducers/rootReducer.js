import { combineReducers } from 'redux';
import uiManagerReducer from './uiManager';
import placeReducer from './placeReducer'; 

const rootReducer = combineReducers({
  uiManager: uiManagerReducer,
  places: placeReducer, 
});

export default rootReducer;