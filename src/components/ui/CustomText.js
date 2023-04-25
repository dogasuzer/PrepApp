import { useCallback } from 'react';
import { Text, View } from 'react-native';

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

const CustomText = ({ children, style }) => {
  const [fontsLoaded] = useFonts({
    'Poppins-Medium': require('../../../assets/fonts/Poppins-Medium.ttf')
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View onLayout={onLayoutRootView}>
      <Text style={[style, { fontFamily: 'Poppins-Medium' }]}>{children}</Text>
    </View>
  );
};
export default CustomText;
