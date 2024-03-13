import React, { useState, useEffect, useContext } from "react";
import { Pressable, Alert } from "react-native";
import { Button, Modal, Portal, Text, TextInput, SegmentedButtons } from "react-native-paper";
import { Calendar } from "react-native-calendars";
import { SafeAreaView } from "react-native-safe-area-context";
import { WorkoutContext } from "./Contexts";
import Styles from "../styles/Styles";

export default function AddWorkOut() {
    const allTest = [
        { distance: 9, duration: 2, selection: 'walk', date: '02.12.2023' },
        { distance: 3, duration: 1, selection: 'bike', date: '31.05.2024' },
        { distance: 10, duration: 4, selection: 'swim', date: '01.04.2024' },
        { distance: 43, duration: 6, selection: 'bike', date: '15.09.2024' },
        { distance: 21, duration: 5, selection: 'walk', date: '20.10.2024' },
      ];

  useEffect(() => {
    setWorkout((prev) => [...prev, ...allTest]);
  }, []);

  const buttons = [
    { label: 'Walk', icon: 'walk', value: 'walk' },
    { label: 'Cycle', icon: 'bike', value: 'bike' },
    { label: 'Swim', icon: 'swim', value: 'swim' },
  ];
  
  const [selection, setSelection] = useState(buttons[0].value);
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');
  const [visible, setVisible] = useState(false);
  const [date, setDate] = useState('');
  const [isDistanceHovered, setIsDistanceHovered] = useState(false);
  const [isDurationHovered, setIsDurationHovered] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const { setWorkout } = useContext(WorkoutContext);

  function dateSelected(day) {
    const selectedDate = new Date(day.dateString);
    setVisible(false);
    setDate(selectedDate.toLocaleDateString('fi-FI'));
  }

  function addWork() {
    if (!distance || !duration || !date) {
      Alert.alert('Not every field is filled');
    } else {
      setWorkout(prev => [...prev, { distance, duration, date, selection }]);
      setDistance('');
      setDuration('');
      setDate('');
    }
  }

  return (
    <SafeAreaView style={Styles.container}>
      <Text variant='headlineLarge' style={Styles.label}> WorkOut Diary </Text>
      <SegmentedButtons style={Styles.segbut}
        value={selection}
        onValueChange={setSelection}
        buttons={buttons}
      ></SegmentedButtons>
      <TextInput
        style={[Styles.disDu, isDistanceHovered && Styles.hoveredButton]}
        keyboardType="number-pad"
        mode='outlined'
        label='Distance *'
        value={distance}
        onChangeText={setDistance}
        onFocus={() => setIsDistanceHovered(true)}
        onBlur={() => setIsDistanceHovered(false)}
        />

        <TextInput
        style={[Styles.disDu, isDurationHovered && Styles.hoveredButton]}
        keyboardType="number-pad"
        mode='outlined'
        label='Duration *'
        value={duration}
        onChangeText={setDuration}
        onFocus={() => setIsDurationHovered(true)}
        onBlur={() => setIsDurationHovered(false)}
        />
      <Portal>
        <Modal visible={visible} onDismiss={hideModal} >
          <Calendar onDayPress={dateSelected}></Calendar>
          <Pressable onPress={() => setVisible(true)}>
          </Pressable>
        </Modal>
      </Portal>
      <Pressable
        style={[Styles.button, isDistanceHovered && Styles.hoveredButton]}
        onPress={showModal}
        onHoverIn={() => { setIsDistanceHovered(true); setIsDurationHovered(false); }}
        onHoverOut={() => setIsDistanceHovered(false)}
      >
        <Text style={Styles.buttonText}>{date ? date : ' Add Date'}</Text>
      </Pressable>
      <Pressable
        style={[Styles.button2, isDurationHovered && Styles.hoveredButton]}
        onPress={addWork}
        onHoverIn={() => { setIsDurationHovered(true); setIsDistanceHovered(false); }}
        onHoverOut={() => setIsDurationHovered(false)}
      >
        <Text style={Styles.buttonText}>Add WorkOut</Text>
      </Pressable>
    </SafeAreaView>
  );
}


