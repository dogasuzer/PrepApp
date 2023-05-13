import { View, Text } from 'react-native';
import React from 'react';
import COLORS from '../../Colors';

const Header = ({ title }) => {
  return (
    <View
      style={{
        justifyContent: 'flex-start',
        backgroundColor: COLORS.primary,
        height: 110,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'flex-end'
      }}
    >
      <Text
        style={{
          fontSize: 28,
          textAlign: 'center',
          color: COLORS.white,
          paddingTop: 20,
          paddingBottom: 30,
          paddingLeft: 40
        }}
      >
        {title}
      </Text>
    </View>
  );
};

export default Header;
