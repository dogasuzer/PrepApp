import { createSlice } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  recipes: [
    {
      id: 121321,
      name: 'Chicken sandwich',
      steps: [
        'Cook the chicken: Season chicken breasts with salt and pepper, then cook them in a skillet or on a grill until they are fully cooked.',
        'Cook the chicken: Season chicken breasts with salt and pepper, then cook them in a skillet or on a grill until they are fully cooked.'
      ],
      ingredients: ['chicken', 'bread', 'onion'],
      totalTime: '1 hr'
    }
  ]
};

export const addRecipeSlice = createSlice({
  name: 'addRecipe',
  initialState,
  reducers: {
    addRecipe: (state, action) => {
      state.recipes.push(action.payload);
      AsyncStorage.setItem('recipes', JSON.stringify(state.recipes));
    },
    loadRecipes: (state, action) => {
      state.recipes = action.payload;
    },
    deleteRecipe: (state, action) => {
      const prep = action.payload;
      state.recipes = state.recipes.filter(recipe => recipe.id !== prep.id);
      AsyncStorage.setItem('recipes', JSON.stringify(state.recipes));
    }
  }
});

export const { addRecipe, loadRecipes, deleteRecipe } = addRecipeSlice.actions;

export const loadRecipesAsync = () => async dispatch => {
  try {
    const recipes = await AsyncStorage.getItem('recipes');
    if (recipes !== null) {
      dispatch(loadRecipes(JSON.parse(recipes)));
    }
  } catch (error) {
    console.error(error);
  }
};

export default addRecipeSlice;
