import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getTransactions = createAsyncThunk(
  '/getUpcomingMovies',
  async () => {
    return fetch('./data.json')
      .then((response) => response.json())
      .then((data) => {
        return data;
      })
      .catch((e) => {
        return e;
      });
  }
);

export const getConversionRate = createAsyncThunk(
  '/getConversionRate',
  async () => {
    return fetch(
      'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json'
    )
      .then((res) => res.json())
      .then((res) => res)
      .catch((e) => e);
  }
);

const initialState = {
  transactionList: [],
  currentTransation: {},
  isLoading: false,
  totalAmount: 22500000,
  previousCycle: 1980000,
  usd: 0,
  error: false,
};

export const transactionSlice = createSlice({
  name: 'transactionSlice',
  initialState,
  reducers: {
    setCurrentTransaction: (state, action) => {
      let idx = state.transactionList.find((t) => {
        return t.invoice_no === action.payload;
      });
      state.currentTransation = { ...idx };
    },
    updateTransaction: (state, action) => {
      let idx = state.transactionList.findIndex((t) => {
        return t.invoice_no === action.payload.invoice_no;
      });
      let st = [...state.transactionList];
      state.transactionList[idx] = { ...action.payload };
    },
    clearDetails: (state) => {
      state.currentTransation = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTransactions.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(getTransactions.fulfilled, (state, action) => {
        state.transactionList = [...action.payload];
        state.isLoading = false;
      })
      .addCase(getTransactions.rejected, (state, action) => {
        state.isLoading = false;
        state.error = true;
      })
      .addCase(getConversionRate.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getConversionRate.fulfilled, (state, action) => {
        state.usd = action.payload.usd.inr;
        state.isLoading = false;
      })
      .addCase(getConversionRate.rejected, (state, action) => {
        state.isLoading = false;
        state.error = true;
      });
  },
});

export const { updateTransaction, clearDetails, setCurrentTransaction } =
  transactionSlice.actions;
export default transactionSlice.reducer;
