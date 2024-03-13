import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import WorkOutList from './components/WorkOutList';
import AddWorkOut from './components/AddWorkOut';
import Settings from './components/Settings';
import { WorkoutContext, UnitsContext } from './components/Contexts';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as PaperProvider, DefaultTheme as PaperDefaultTheme } from 'react-native-paper';

export default function App() {
  const [workout, setWorkout] = useState([]);
  const [units, setUnits] = useState('km');

  return (
    <WorkoutContext.Provider value={{ workout, setWorkout }}>
      <UnitsContext.Provider value={{ units, setUnits }}>
        <PaperProvider theme={PaperTheme}>
          <SafeAreaProvider>
            <Navigation />
          </SafeAreaProvider>
        </PaperProvider>
      </UnitsContext.Provider>
    </WorkoutContext.Provider>
  );
}

const Tab = createMaterialTopTabNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: 'black',
          inactiveTintColor: '#757575',
          inactiveOpacity: 5,
          labelStyle: { fontSize: 12, fontWeight: 'bold' },
          indicatorStyle: { backgroundColor: '#64dd17' },
          style: { backgroundColor: '#fff'}
        }}>
        <Tab.Screen
          name='AddWorkOut'
          options={{ title: 'Add Workout' }}
          component={AddWorkOut}
        />
        <Tab.Screen
          name='WorkOutList'
          options={{ title: 'Workout History' }}
          component={WorkOutList}
        />
        <Tab.Screen
          name='Settings'
          options={{ title: 'Settings' }}
          component={Settings}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const PaperTheme = {
  ...PaperDefaultTheme,
  colors: {
    ...PaperDefaultTheme.colors,
    primary: '#3F51B5',
    accent: '#FF5722',
    background: '#ffff',
    surface: '#fff',
    text: '#000',
    placeholder: '#757575',
  },
};


