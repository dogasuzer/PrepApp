import { TouchableOpacity } from 'react-native';
import React from 'react';
import CustomText from './CustomText';

const CustomButton = ({ style, onPress, text, textColor }) => {
  return (
    <TouchableOpacity
      style={[
        {
          backgroundColor: 'white',
          height: 50,
          width: 120,
          borderRadius: 20,
          justifyContent: 'center',
          alignItems: 'center'
        },
        style
      ]}
      onPress={onPress}
    >
      <CustomText style={{ color: textColor, fontSize: 18 }}>{text}</CustomText>
    </TouchableOpacity>
  );
};

export default CustomButton;
