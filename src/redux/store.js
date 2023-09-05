import { configureStore } from '@reduxjs/toolkit';
import transaction from './reducer/transactionSlice';

export const store = configureStore({
  reducer: {
    transaction,
  },
});
