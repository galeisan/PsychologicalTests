import { StyleSheet, Text, View } from 'react-native';
import { ListScreen } from './screens/ListScreen';
import { InfoScreen } from './screens/InfoScreen';
import { TestScreen } from './screens/TestScreen';
import { ResultScreen } from './screens/ResultScreen';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
            name={'Психологические тесты'}
            component={ListScreen}
            options={{
              headerTitleStyle: styles.headerTitleStyle,
              headerTitleAlign: 'center',
            }}
        />
        <Stack.Screen
            name='Info'
            component={InfoScreen}
            options={navigationOptions(styles)}
        />
        <Stack.Screen
            name={'Test'}
            component={TestScreen}
            options={navigationOptions(styles)}
        />
        <Stack.Screen
            name={'Result'}
            component={ResultScreen}
            options={() => ({
                ...navigationOptions(styles),
                headerBackVisible: false
            })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const navigationOptions= (styles) => ( {
    headerStyle: styles.headerStyle,
    headerTintColor: styles.headerTintColor,
    headerTitleStyle: styles.headerTitleStyle,
    headerTitleAlign: 'center',
});

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: '#A9E0B9',
  },
  headerTintColor: '#000000',
  headerTitleStyle: {
    fontSize: 20,
    fontWeight: '500',
    lineHeight: 20,
  },
});
