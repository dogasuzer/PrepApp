import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import COLORS from '../../Colors';
import { stepActions } from '../../store/donestep-slice';
import { useDispatch, useSelector } from 'react-redux';
import { StyleSheet } from 'react-native';
import { capitalizeFirstLetter } from '../../util/helperfunctions';

const StepCard = ({ item, id, color }) => {
  const dispatch = useDispatch();
  const doneSteps = useSelector(state => state.doneSteps.doneSteps);

  let showStep = true;

  function onPressHandler() {
    dispatch(stepActions.markDone({ id: id, step: item }));
  }
  if (doneSteps.find(step => step.id === id)) {
    showStep = false;
  }

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={onPressHandler}
      style={{ margin: 10 }}
    >
      {showStep && (
        <View style={[styles.container, { backgroundColor: color }]}>
          <View style={styles.emptybox}></View>
          <Text>{capitalizeFirstLetter(item)}</Text>
        </View>
      )}

      {!showStep && (
        <View style={[styles.container]}>
          <View style={styles.filledbox}></View>
          <Text style={{ textDecorationLine: 'line-through' }}>{item}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default StepCard;

const styles = StyleSheet.create({
  emptybox: {
    margin: 10,
    backgroundColor: COLORS.secondary200,
    width: 15,
    height: 15,
    padding: 10
  },

  filledbox: {
    margin: 10,
    backgroundColor: COLORS.black,
    width: 15,
    height: 15,
    padding: 10
  },

  text: { color: COLORS.white },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    width: '90%',
    height: 'auto',
    paddingRight: '15%'
  }
});
