import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createBottomTabNavigator } from "react-navigation-tabs";
import RequestScreen from "../screens/requestscreen";
import { AppStackNavigator } from "./AppStackNavigator";

export const AppTabNavigator = createBottomTabNavigator({
    DonationScreen: {screen: AppStackNavigator, 
        navigationOptions: {tabBarIcon: <Image style={{width: 20, height: 20}} source={require("../assets/request-list.png")}></Image>}
    },
    RequestScreen: {screen: RequestScreen,
        navigationOptions: {tabBarIcon: <Image style={{width: 20, height: 20}} source={require("../assets/request-book.png")}></Image>}
    }
})


