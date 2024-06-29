import { createSlice } from "@reduxjs/toolkit";

const cargarTransaction = () => {
  const transactionAlmacenados = localStorage.getItem('transaction');
  return transactionAlmacenados ? JSON.parse(transactionAlmacenados) : [];
}

const guardarTransaction = (transaction) => {
  localStorage.setItem('transaction', JSON.stringify(transaction));
};


const transactionsSlice = createSlice({
  name: 'transactions',
  initialState: cargarTransaction(),
  reducers: {
    agregarTransaction: (state, action) => {
      state.push(action.payload);
      guardarTransaction(state);
    },
    eliminarTransaction: (state, action) => {
      const { id } = action.payload;
      const transactions = state.filter((transaction) => transaction.id !== id);
      if (transactions) {
        guardarTransaction(transactions)
      }
    }
  }
})

export const { agregarTransaction, eliminarTransaction } = transactionsSlice.actions;

export default transactionsSlice.reducer;