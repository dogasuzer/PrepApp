import { configureStore } from '@reduxjs/toolkit';
import uiSlice from './ui-slice';
import prepsinprogressSlice from './prepsinprogress-slice';

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    prepsinprogress: prepsinprogressSlice.reducer
  }
});

export default store;