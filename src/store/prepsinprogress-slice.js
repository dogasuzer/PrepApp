import { createSlice } from '@reduxjs/toolkit';

const prepsinprogressSlice = createSlice({
  name: 'prepsinprogress',
  initialState: {
    preps: [
      {
        id: 2324,
        name: 'banana',
        steps: ['get a banana', 'cut a banana'],
        ingredients: ['banana'],
        totalTime: 1,
        isOnPrepToProgress: true
      }
    ]
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
          totalTime: newPrep.totalTime,
          isOnPrepToProgress: true
        });
      }
      if (existingPrep) {
        alert('You have already added this prep to your preps in progress');
      }
    },
    removePrepToProgress(state, action) {
      const prep = action.payload;
      const existingPrep = state.preps.find(item => item.id === prep.id);
      if (existingPrep) {
        state.preps = state.preps.filter(item => item.id !== prep.id);
      }
    }
  }
});

export const prepsinprogressActions = prepsinprogressSlice.actions;

export default prepsinprogressSlice;
