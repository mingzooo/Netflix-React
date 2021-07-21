import { createStore } from 'redux';
import LikeReducer from './login/reducer';

const store = createStore(LikeReducer)

export default store;