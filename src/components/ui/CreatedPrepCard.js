import { View, Text, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import PrepCard from '../../components/ui/PrepCard';
import CustomButton from '../../components/ui/CustomButton';
import COLORS from '../../Colors';
import { useDispatch } from 'react-redux';
import { deleteRecipe } from '../../store/createdpreps-slice';

const CreatedPrepCard = ({ item }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const dispatch = useDispatch();

  function onDeletePrep() {
    dispatch(
      deleteRecipe({
        id: item.id,
        name: item.name,
        steps: item.steps,
        ingredients: item.ingredients,
        totalTime: item.totalTime
      })
    );
  }
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Are you sure you want to delete "{item.name} Recipe" permanently?
            </Text>
            <View style={{ flexDirection: 'row' }}>
              <CustomButton
                onPress={() => {
                  onDeletePrep();
                  setModalVisible(!modalVisible);
                }}
                text={'Delete'}
                style={[styles.button, { width: 100 }]}
                textColor={COLORS.white}
              ></CustomButton>
              <CustomButton
                onPress={() => setModalVisible(!modalVisible)}
                text={'Cancel'}
                style={[styles.button, { width: 100 }]}
                textColor={COLORS.white}
              ></CustomButton>
            </View>
          </View>
        </View>
      </Modal>

      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Text style={{ textAlign: 'right', marginRight: 20 }}>X Delete</Text>
      </TouchableOpacity>
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
    </View>
  );
};

export default CreatedPrepCard;

const styles = StyleSheet.create({
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  container: { justifyContent: 'center', alignItems: 'center' },
  button: {
    backgroundColor: COLORS.primary,
    margin: 20
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
