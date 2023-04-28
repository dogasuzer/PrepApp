import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import StepCard from '../../components/ui/StepCard';
import { useDispatch, useSelector } from 'react-redux';
import CustomButton from '../../components/ui/CustomButton';
import { StyleSheet } from 'react-native';
import { prepsinprogressActions } from '../../store/prepsinprogress-slice';

const PrepDetailsScreen = ({ route }) => {
  const { item } = route.params;
  // console.log(item.name);
  const dispatch = useDispatch();
  const showStep = useSelector(state => state.ui.showStep);

  function addToPrepsInProgress() {
    dispatch(
      prepsinprogressActions.addPrepToProgress({
        id: item.id,
        name: item.name,
        steps: item.steps,
        ingredients: item.ingredients,
        totalTime: item.totalTime,
        isOnPrepToProgress: true
      })
    );
  }

  function removeFromPrepsInProgress() {
    dispatch(
      prepsinprogressActions.removePrepToProgress({
        id: item.id,
        name: item.name,
        steps: item.steps,
        ingredients: item.ingredients,
        totalTime: item.totalTime,
        isOnPrepToProgress: false
      })
    );
  }

  return (
    <View style={styles.card}>
      {!item.isOnPrepToProgress && (
        <CustomButton
          style={styles.button}
          onPress={addToPrepsInProgress}
          text={'Add to your preps in progress'}
        ></CustomButton>
      )}
      {item.isOnPrepToProgress && (
        <CustomButton
          style={styles.button}
          onPress={removeFromPrepsInProgress}
          text={'Remove from your preps in progress'}
        ></CustomButton>
      )}

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
