import { createSlice } from '@reduxjs/toolkit';

const doneStepsSlice = createSlice({
  name: 'doneSteps',
  initialState: { doneSteps: [] },
  reducers: {
    markDone(state, action) {
      const doneStep = action.payload;
      const existingStep = state.doneSteps.find(
        step => step.id === doneStep.id
      );
      if (!existingStep) {
        state.doneSteps.push({
          id: doneStep.id,
          step: doneStep.step
        });
      }
      if (existingStep) {
        state.doneSteps = state.doneSteps.filter(
          step => step.id !== doneStep.id
        );
      }
    }
  }
});

export const stepActions = doneStepsSlice.actions;

export default doneStepsSlice;
