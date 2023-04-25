import { View, Text } from 'react-native';
import React from 'react';
import { StyleSheet } from 'react-native';
import COLORS from '../../Colors';

const IngredientCard = ({ item }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{item}</Text>
    </View>
  );
};

export default IngredientCard;

const styles = StyleSheet.create({
  container: {
    margin: 4,
    backgroundColor: COLORS.primary,
    minWidth: 50,
    height: 22
  },
  text: { color: COLORS.white }
});
