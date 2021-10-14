import reduce from '../reducers/index';
import { createStore } from 'redux';

const initialState = {
  user: 'Kalle',
  balance: 1000,
};

const store = createStore(reduce, initialState);
export default store;
