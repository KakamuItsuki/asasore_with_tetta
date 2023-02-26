import React, { Component } from 'react';
import Start from './screens/start.js';
import  Rule  from './screens/rule.js';
import  RandomTheme  from './screens/random-theme.js';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator, HeaderTitle } from 'react-navigation-stack';
import { Tile } from 'react-native-elements/dist/tile/Tile';
import SelectNumber from './screens/select-number.js';
import InputName from './screens/input-name.js';
import Theme from './screens/theme.js';

const MainStack = createStackNavigator(
  {
    Start: Start,
    Rule: Rule,
    RandomTheme: RandomTheme,
    SelectNumber: SelectNumber,
    InputName: InputName,
    Theme: Theme,
  },
  // デフォルトでつくページ名
    {
    //headerMode: 'none',
    //initialRouteName: 'home',
    defaultNavigationOptions: {
      headerBackTitleVisible: true,
      headerStyle: { backgroundColor: '#d2b48c' },
      title: null,
      headerTintColor: 'white',
    }
  }
  
)
const AppContainer = createAppContainer(MainStack)
export default class App extends Component {
  render() {
    return (
      <AppContainer />
    )
  }
}
