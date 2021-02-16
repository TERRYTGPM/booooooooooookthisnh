import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import {AppTabNavigator} from "./components/AppTabNavigator";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import {AppDrawerNavigator} from "./components/AppDrawerNavigator";

export default class App extends React.Component {
  render(){
    return (
      <AppContainer></AppContainer>
    );
  }
}

const switchNavigator = createSwitchNavigator({
  WelcomeScreen: {screen: WelcomeScreen},
  Drawer: {screen: AppDrawerNavigator},
  BottomTab: {screen: AppTabNavigator }
});
const AppContainer = createAppContainer(switchNavigator);