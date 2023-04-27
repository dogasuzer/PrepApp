import { View, Text } from 'react-native';
import React from 'react';
import StepCard from '../../components/ui/StepCard';
import { useDispatch, useSelector } from 'react-redux';
import CustomButton from '../../components/ui/CustomButton';
import { StyleSheet } from 'react-native';

const PrepDetailsScreen = ({ route }) => {
  const { item } = route.params;
  // console.log(item.name);

  const showStep = useSelector(state => state.ui.cartIsVisible);

  return (
    <View style={styles.card}>
      <CustomButton
        style={styles.button}
        text={'Add to your preps in progress'}
      ></CustomButton>
      <Text>{item.name}</Text>
      {item !== undefined || typeof item !== 'undefined'
        ? item.steps.map(item => {
            return (
              <View>
                <StepCard item={item} showStep={showStep} />
              </View>
            );
          })
        : null}

      <StepCard />
    </View>
  );
};

export default PrepDetailsScreen;

const styles = StyleSheet.create({
  button: {
    marginTop: 40,
    justifyContent: 'center',
    padding: 20,
    width: 350,
    height: 70
  },
  card: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});
