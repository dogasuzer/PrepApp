import { View, Text } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import PrepCard from '../../components/ui/PrepCard';

const PrepsInProgressScreen = () => {
  const prepsInProgressItems = useSelector(
    state => state.prepsinprogress.preps
  );

  return (
    <View>
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
    </View>
  );
};

export default PrepsInProgressScreen;
