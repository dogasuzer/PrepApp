import { View } from 'react-native';
import React from 'react';
import { StyleSheet } from 'react-native';
import CustomText from './CustomText';
import IngredientCard from './IngredientCard';
import COLORS from '../../Colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const PrepCard = ({ item }) => {
  const navigation = useNavigation();
  function onPressHandler() {
    navigation.navigate('PrepDetailScreen', {
      item: item
    });
  }
  return (
    <TouchableOpacity onPress={onPressHandler} style={styles.container}>
      <CustomText style={styles.prepName}>{item.name}</CustomText>

      {item !== undefined || typeof item !== 'undefined'
        ? item.ingredients.map(item => {
            return (
              <View style={styles.ingredientscard}>
                <IngredientCard item={item} />
              </View>
            );
          })
        : null}

      <IngredientCard />
    </TouchableOpacity>
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
