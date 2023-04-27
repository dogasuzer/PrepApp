import { View, Text } from 'react-native';
import React from 'react';
import COLORS from '../../Colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { uiActions } from '../../store/ui-slice';
import { useDispatch, useSelector } from 'react-redux';

const StepCard = ({ item: item, showStep: showStep }) => {
  const dispatch = useDispatch();

  function onPressHandler() {
    dispatch(uiActions.toggle());
  }
  // const showStep = useSelector(state => state.ui.cartIsVisible);
  return (
    <TouchableOpacity
      onPress={onPressHandler}
      style={{ margin: 10, backgroundColor: COLORS.primary }}
    >
      {showStep && <Text>{item}</Text>}

      {!showStep && (
        <Text style={{ textDecorationLine: 'line-through' }}>{item}</Text>
      )}
    </TouchableOpacity>
  );
};

export default StepCard;
