import React from 'react';
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { addRecipe } from '../../store/createdpreps-slice';
import { generateRandomId } from '../../util/helperfunctions';
import { StyleSheet } from 'react-native';
import COLORS from '../../Colors';
import CustomButton from './CustomButton';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const CreatePrepForm = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [recipe, setRecipe] = React.useState({
    name: '',
    steps: [''],
    ingredients: [''],
    totalTime: '',
    id: ''
  });

  const handleNameChange = value => {
    setRecipe(prevRecipe => ({ ...prevRecipe, name: value }));
  };

  const handleStepChange = (value, index) => {
    setRecipe(prevRecipe => {
      const newSteps = [...prevRecipe.steps];
      newSteps[index] = value;
      return { ...prevRecipe, steps: newSteps };
    });
  };

  const handleIngredientChange = (value, index) => {
    setRecipe(prevRecipe => {
      const newIngredients = [...prevRecipe.ingredients];
      newIngredients[index] = value;
      return { ...prevRecipe, ingredients: newIngredients };
    });
  };

  const handleAddStep = () => {
    setRecipe(prevRecipe => {
      const newSteps = [...prevRecipe.steps, ''];
      return { ...prevRecipe, steps: newSteps };
    });
  };

  const handleAddIngredient = () => {
    setRecipe(prevRecipe => {
      const newIngredients = [...prevRecipe.ingredients, ''];
      return { ...prevRecipe, ingredients: newIngredients };
    });
  };
  const IngredientDeleteHandler = index => {
    setRecipe(prevRecipe => {
      const newIngredients = [...prevRecipe.ingredients];
      newIngredients.splice(index, 1);
      return { ...prevRecipe, ingredients: newIngredients };
    });
  };

  const handleStepDelete = index => {
    setRecipe(prevRecipe => {
      const newSteps = [...prevRecipe.steps];
      newSteps.splice(index, 1);
      return { ...prevRecipe, steps: newSteps };
    });
  };

  const handleSubmit = () => {
    if (!recipe.name || recipe.name.trim() === '') {
      alert('Name is required.');
      return;
    }

    if (
      recipe.steps.length === 0 ||
      recipe.steps.some(step => step.trim() === '')
    ) {
      alert('Steps are required.');
      return;
    }

    if (
      recipe.ingredients.length === 0 ||
      recipe.ingredients.some(ingredient => ingredient.trim() === '')
    ) {
      alert('Ingredients are required.');
      return;
    }

    if (!recipe.totalTime || isNaN(Number(recipe.totalTime))) {
      alert('Total time is required and must be a number.');
      return;
    }
    const newRecipe = {
      ...recipe,
      id: generateRandomId()
    };

    dispatch(addRecipe(newRecipe));
    navigation.goBack();
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text>Name*:</Text>
      <TextInput
        style={styles.input}
        value={recipe.name}
        onChangeText={handleNameChange}
      />

      <Text>Steps*:</Text>
      {recipe.steps.map((step, index) => (
        <View
          style={{
            width: '90%',
            flexDirection: 'row',
            justifyContent: 'center'
          }}
          key={index}
        >
          <TextInput
            style={styles.input}
            value={step}
            onChangeText={value => handleStepChange(value, index)}
          />
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignContent: 'center'
            }}
            onPress={() => handleStepDelete(index)}
          >
            <Text style={{ textAlign: 'center' }}>X</Text>
          </TouchableOpacity>
        </View>
      ))}
      <CustomButton
        text={'Add step'}
        style={styles.button}
        textColor={COLORS.white}
        onPress={handleAddStep}
      ></CustomButton>

      <Text>Ingredients*:</Text>
      {recipe.ingredients.map((ingredient, index) => (
        <View
          style={{
            width: '90%',
            flexDirection: 'row',
            justifyContent: 'center'
          }}
          key={index}
        >
          <TextInput
            style={styles.input}
            value={ingredient}
            onChangeText={value => handleIngredientChange(value, index)}
          />
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignContent: 'center'
            }}
            onPress={() => IngredientDeleteHandler(index)}
          >
            <Text style={{ textAlign: 'center' }}>X</Text>
          </TouchableOpacity>
        </View>
      ))}
      <CustomButton
        text={'Add ingredient'}
        style={styles.button}
        textColor={COLORS.white}
        onPress={handleAddIngredient}
      ></CustomButton>
      <Text>Total time*:</Text>
      <TextInput
        style={styles.input}
        value={recipe.totalTime}
        onChangeText={value =>
          setRecipe(prevRecipe => ({ ...prevRecipe, totalTime: value }))
        }
      />
      <CustomButton
        text={'Submit'}
        style={styles.submitbutton}
        textColor={COLORS.white}
        onPress={handleSubmit}
      ></CustomButton>
    </ScrollView>
  );
};

export default CreatePrepForm;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 130
  },
  button: {
    margin: 30,
    justifyContent: 'center',
    width: 'auto',
    padding: 8,
    backgroundColor: COLORS.primary
  },
  text: {
    fontSize: 24,
    textAlign: 'center',
    color: COLORS.white,
    paddingTop: 20,
    paddingBottom: 30
  },
  input: {
    backgroundColor: COLORS.primary100,
    width: '90%',
    alignSelf: 'center',
    margin: 15
  },
  submitbutton: {
    margin: 30,
    justifyContent: 'center',
    width: '70%',
    backgroundColor: COLORS.primary
  }
});
