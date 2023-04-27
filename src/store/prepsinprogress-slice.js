import { createSlice } from '@reduxjs/toolkit';

const prepsinprogressSlice = createSlice({
  name: 'prepsinprogress',
  initialState: {
    preps: []
  },
  reducers: {
    addPrepToProgress(state, action) {
      const newPrep = action.payload;
      const existingPrep = state.preps.find(item => item.id === newPrep.id);
      if (!existingPrep) {
        state.preps.push({
          id: newPrep.id,
          name: newPrep.name,
          steps: newPrep.steps,
          ingredients: newPrep.ingredients,
          totalTime: newPrep.totalTime
        });
      }
    },
    removePrepToProgress(state, action) {
      const id = action.payload;
      const existingPrep = state.preps.find(item => item.id === newPrep.id);
      if (existingPrep) {
        state.preps = state.preps.filter(item => item.id !== id);
      }
    }
  }
});

export const prepsinprogressActions = prepsinprogress.actions;

export default prepsinprogressSlice;
