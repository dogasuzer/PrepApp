import { View, TouchableOpacity } from 'react-native';
import React from 'react';
import { StyleSheet } from 'react-native';
import CustomText from './CustomText';
import IngredientCard from './IngredientCard';
import COLORS from '../../Colors';
import { useNavigation } from '@react-navigation/native';
import {
  capitalizeFirstLetter,
  generateRandomId
} from '../../util/helperfunctions';
import SHADOWS from '../../Shadows';

const PrepCard = ({ item }) => {
  const navigation = useNavigation();
  function onPressHandler() {
    navigation.navigate('PrepDetailScreen', {
      item: item
    });
  }
  return (
    <TouchableOpacity
      onPress={onPressHandler}
      style={styles.container}
      activeOpacity={0.7}
    >
      <CustomText style={styles.prepName}>
        {capitalizeFirstLetter(item.name)}
      </CustomText>
      <View style={styles.ingredientscard}>
        {item !== undefined || typeof item !== 'undefined'
          ? item.ingredients.map(ingredients => {
              return (
                <IngredientCard key={generateRandomId()} item={ingredients} />
              );
            })
          : null}
      </View>
      <View style={styles.info}>
        <View style={styles.box}></View>
        <CustomText style={{ marginRight: 20 }}>
          {item.steps.length} steps
        </CustomText>
        <View style={styles.box}></View>

        <CustomText>{item.totalTime} min prepare time</CustomText>
      </View>
    </TouchableOpacity>
  );
};

export default PrepCard;

const styles = StyleSheet.create({
  container: [
    {
      marginTop: 20,
      marginBottom: 20,
      justifyContent: 'space-evenly',
      alignItems: 'center',
      padding: 20,
      backgroundColor: COLORS.white,
      minHeight: 200,
      width: '90%',
      borderRadius: 20,
      alignSelf: 'center'
    },
    SHADOWS.shadow10
  ],
  ingredientscard: {
    justifyContent: 'center',
    flexDirection: 'row',
    width: '90%',
    flexWrap: 'wrap'
  },
  prep: {
    marginBottom: 15
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    height: 50,
    backgroundColor: '#fff',
    marginBottom: 10,
    padding: 8
  },
  prepListWrapper: { marginTop: 20 },
  prepName: { fontSize: 19, color: COLORS.secondary400, textAlign: 'center' },
  info: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 10
  },
  box: {
    width: 13,
    height: 13,
    backgroundColor: COLORS.primary,
    marginRight: 7,
    marginBottom: 3
  }
});
