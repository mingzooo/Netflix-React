import { createStore } from 'redux';
import LikeReducer from './like/reducer';

const store = createStore(LikeReducer)

export default store;