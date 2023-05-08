import { View, Text } from 'react-native';
import React from 'react';
import { StyleSheet } from 'react-native';
import COLORS, { RANDOMCOLORS } from '../../Colors';
import {
  capitalizeFirstLetter,
  generateRandomColor
} from '../../util/helperfunctions';

const IngredientCard = ({ item }) => {
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: RANDOMCOLORS[generateRandomColor()] }
      ]}
    >
      <Text ellipsizeMode="tail" numberOfLines={1} style={styles.text}>
        {capitalizeFirstLetter(item)}
      </Text>
    </View>
  );
};

export default IngredientCard;

const styles = StyleSheet.create({
  container: {
    margin: 4,
    minWidth: 50,
    height: 28,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: { color: COLORS.white, margin: 2 }
});
