import { View, Text } from 'react-native';
import React from 'react';
import CreatePrepForm from '../../components/ui/CreatePrepForm';
import { StyleSheet } from 'react-native';
import COLORS from '../../Colors';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CreatePrepsScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <View
        style={{
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          backgroundColor: COLORS.primary,
          height: 130,
          flexDirection: 'row'
        }}
      >
        <Text style={styles.text}>New Prep</Text>
        <TouchableOpacity activeOpacity={1} onPress={() => navigation.goBack()}>
          <Text style={styles.cancel}>{'X Cancel'}</Text>
        </TouchableOpacity>
      </View>
      <CreatePrepForm></CreatePrepForm>
    </View>
  );
};

export default CreatePrepsScreen;

const styles = StyleSheet.create({
  text: {
    fontSize: 28,
    textAlign: 'center',
    color: COLORS.white,
    paddingTop: 20,
    paddingBottom: 30,
    paddingLeft: 40
  },
  cancel: {
    color: 'white',
    marginBottom: 35,
    margin: 20
  }
});
