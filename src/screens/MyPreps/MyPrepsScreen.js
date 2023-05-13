import { View, Text, StyleSheet, Modal, Pressable } from 'react-native';
import React, { useEffect, useState } from 'react';
import CustomButton from '../../components/ui/CustomButton';
import { useNavigation } from '@react-navigation/native';
import COLORS from '../../Colors';
import { useDispatch, useSelector } from 'react-redux';
import { loadRecipesAsync } from '../../store/createdpreps-slice';
import CreatedPrepCard from '../../components/ui/CreatedPrepCard';
import Header from '../../components/ui/Header';
import { ScrollView } from 'react-native';
const MyPrepsScreen = () => {
  const navigation = useNavigation();

  function createPrepNavigateHandler() {
    navigation.navigate('CreatePrepsScreen');
  }

  const dispatch = useDispatch();
  const createdPreps = useSelector(state => state.addRecipe.recipes);

  useEffect(() => {
    dispatch(loadRecipesAsync());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <Header title={'My preps'} />

      <CustomButton
        onPress={createPrepNavigateHandler}
        text={'Create a new prep'}
        style={styles.button}
        textColor={COLORS.white}
      ></CustomButton>
      <ScrollView>
        {createdPreps.map(item => (
          <CreatedPrepCard key={item.id} item={item} />
        ))}
        <View style={{ marginBottom: 200 }}></View>
      </ScrollView>
    </View>
  );
};

export default MyPrepsScreen;

const styles = StyleSheet.create({
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  // textStyle: {
  //   color: 'white',
  //   fontWeight: 'bold',
  //   textAlign: 'center'
  // },
  // modalText: {
  //   marginBottom: 15,
  //   textAlign: 'center',
  //   fontWeight: 'bold'
  // },
  container: { justifyContent: 'center', alignItems: 'center' },
  button: {
    backgroundColor: COLORS.primary,
    width: 'auto',
    margin: 20,
    padding: 10
  },
  text: {
    fontSize: 28,
    textAlign: 'center',
    color: COLORS.white,
    paddingTop: 20,
    paddingBottom: 30,
    paddingLeft: 40
  }
});
