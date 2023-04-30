import { configureStore } from '@reduxjs/toolkit';
import uiSlice from './donestep-slice';
import prepsinprogressSlice from './prepsinprogress-slice';
import doneStepsSlice from './donestep-slice';

const store = configureStore({
  reducer: {
    doneSteps: doneStepsSlice.reducer,
    prepsinprogress: prepsinprogressSlice.reducer
  }
});
store.subscribe(() => console.log(store.getState()));

export default store;
