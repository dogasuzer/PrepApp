import { ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import PrepCard from '../../components/ui/PrepCard';
import { StyleSheet } from 'react-native';
import COLORS from '../../Colors';
import { API, Amplify } from 'aws-amplify';
import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import * as queries from '../../../src/graphql/queries';
import awsmobile from '../../aws-exports';
import Header from '../../components/ui/Header';

Amplify.configure(awsmobile);

const ExplorePrepsScreen = () => {
  const [explorePreps, setExplorePreps] = useState([]);

  async function fetchPreps() {
    try {
      const allPreps = await API.graphql({
        query: queries.listPreps,
        authMode: GRAPHQL_AUTH_MODE.API_KEY
      });
      const PrepsList = allPreps.data.listPreps.items;
      setExplorePreps(PrepsList);
    } catch (err) {
      console.log(err.errors);
    }
  }
  useEffect(() => {
    fetchPreps();
  }, []);
  return (
    <>
      <Header title={'Explore Preps'} />
      <ScrollView contentContainerStyle={styles.card}>
        {explorePreps.map(item => (
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
    </>
  );
};

export default ExplorePrepsScreen;

const styles = StyleSheet.create({
  card: {
    paddingBottom: 100
  }
});
