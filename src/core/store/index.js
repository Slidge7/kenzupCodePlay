import { createStore } from 'redux';
import uiManagerReducer from './reducers/uiManager';

const store = createStore(uiManagerReducer);

export default store;