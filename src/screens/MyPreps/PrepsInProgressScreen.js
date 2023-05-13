import { View } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import PrepCard from '../../components/ui/PrepCard';
import COLORS from '../../Colors';
import { StyleSheet } from 'react-native';
import Header from '../../components/ui/Header';
import { ScrollView } from 'react-native';

const PrepsInProgressScreen = () => {
  const prepsInProgressItems = useSelector(
    state => state.prepsinprogress.preps
  );

  return (
    <View>
      <Header title={'Preps in Progress'} />
      <ScrollView>
        {prepsInProgressItems.map(item => (
          <PrepCard
            key={item.id}
            item={{
              id: item.id,
              name: item.name,
              steps: item.steps,
              ingredients: item.ingredients,
              totalTime: item.totalTime,
              isOnPrepToProgress: item.isOnPrepToProgress
            }}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default PrepsInProgressScreen;

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems: 'center'
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
