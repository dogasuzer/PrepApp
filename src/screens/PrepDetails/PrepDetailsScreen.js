import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import StepCard from '../../components/ui/StepCard';
import { useDispatch } from 'react-redux';
import CustomButton from '../../components/ui/CustomButton';
import { StyleSheet } from 'react-native';
import { prepsinprogressActions } from '../../store/prepsinprogress-slice';
import { useNavigation } from '@react-navigation/native';
import COLORS, { RANDOMCOLORS } from '../../Colors';
import {
  capitalizeFirstLetter,
  generateRandomColor,
  generateRandomId
} from '../../util/helperfunctions';

const PrepDetailsScreen = ({ route }) => {
  const randomColor = RANDOMCOLORS[generateRandomColor()];
  const { item } = route.params;
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const randomId = () => {
    return Math.random();
  };

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

    navigation.navigate('PrepsInProgressScreen');
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
    navigation.navigate('PrepsInProgressScreen');
  }

  return (
    <View style={styles.card}>
      <View
        style={{
          justifyContent: 'flex-start',

          backgroundColor: randomColor,
          height: 130,
          width: '100%',
          flexDirection: 'row',
          alignItems: 'flex-end'
        }}
      >
        <TouchableOpacity
          style={{ maxWidth: '10%', marginRight: 30, marginLeft: 10 }}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.text}>{'<'}</Text>
        </TouchableOpacity>
        <View style={{ maxWidth: '80%' }}>
          <Text style={styles.text}>{capitalizeFirstLetter(item.name)}</Text>
        </View>
      </View>

      {!item.isOnPrepToProgress && (
        <CustomButton
          style={styles.button}
          onPress={addToPrepsInProgress}
          text={'+ Add to your preps in progress'}
        ></CustomButton>
      )}
      {item.isOnPrepToProgress && (
        <CustomButton
          style={styles.button}
          onPress={removeFromPrepsInProgress}
          text={'- Remove from in progress'}
        ></CustomButton>
      )}

      <View style={{ width: '90%' }}>
        {item !== undefined || typeof item !== 'undefined'
          ? item.steps.map(item => {
              return (
                <StepCard
                  color={randomColor}
                  id={randomId()}
                  showStep={true}
                  item={item}
                  key={generateRandomId()}
                />
              );
            })
          : null}
      </View>
    </View>
  );
};

export default PrepDetailsScreen;

const styles = StyleSheet.create({
  button: {
    margin: 30,
    justifyContent: 'center',
    width: 'auto',
    padding: 10
  },
  card: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 24,
    textAlign: 'center',
    color: COLORS.white,
    paddingTop: 20,
    paddingBottom: 30
  }
});
