import { configureStore } from '@reduxjs/toolkit';
import prepsinprogressSlice from './prepsinprogress-slice';
import doneStepsSlice from './donestep-slice';
import addRecipeSlice from './createdpreps-slice';

const store = configureStore({
  reducer: {
    doneSteps: doneStepsSlice.reducer,
    prepsinprogress: prepsinprogressSlice.reducer,
    addRecipe: addRecipeSlice.reducer
  }
});
store.subscribe(() => console.log(store.getState()));

export default store;
