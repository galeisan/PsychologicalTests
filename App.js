import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ListScreen } from './screens/ListScreen';
import { InfoScreen } from './screens/InfoScreen';
import { TestScreen } from './screens/TestScreen';
import { ResultScreen } from './screens/ResultScreen';
import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={'List'} component={ListScreen} />
        <Stack.Screen name={'Info'} component={InfoScreen} />
        <Stack.Screen name={'Test'} component={TestScreen} />
        <Stack.Screen name={'Result'} component={ResultScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
