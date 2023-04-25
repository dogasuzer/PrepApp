import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import dummydata from '../../../dummydata';
import CustomText from './CustomText';
import IngredientCard from './IngredientCard';
import COLORS from '../../Colors';
const PrepCard = () => {
  console.log(dummydata[0]);

  return (
    <View style={styles.container}>
      <CustomText style={styles.prepName}>{dummydata[0].name}</CustomText>

      {dummydata !== undefined || typeof dummydata !== 'undefined'
        ? dummydata[0].ingredients.map(item => {
            return (
              <View style={styles.ingredientscard}>
                <IngredientCard item={item} />
                {/* <ListItem item={item} />
                  <View style={styles.lineStyle} /> */}
              </View>
            );
          })
        : null}

      <IngredientCard />
    </View>
  );
};

export default PrepCard;

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: COLORS.secondary200,
    width: 360,
    minHeight: 200
  },
  ingredientscard: { justifyContent: 'center', flexDirection: 'row' },
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
  prepName: { fontSize: 19, color: COLORS.secondary400 }
});
