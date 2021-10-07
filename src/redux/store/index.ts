import reduce from '../reducers/index';
import { createStore } from 'redux';
import { BankUser } from '../../type';

const initialState: BankUser = {
  user: 'Kalle',
  balance: 1000,
};
export const store = createStore(reduce, initialState);
