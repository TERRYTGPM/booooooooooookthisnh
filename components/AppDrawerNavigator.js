import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SideBar from "./CoustomSideBarMenu";
import {createDrawerNavigator} from "react-navigation-drawer";
import {AppTabNavigator} from "./AppTabNavigator";
import SettingsScreen from "../screens/SettingsScreen"
import NotificationScreen from "../screens/notificationscreen"

export const AppDrawerNavigator = createDrawerNavigator({
    Home:{ screen: AppTabNavigator},
    Setting: { screen: SettingsScreen },
    Notifications: { screen: NotificationScreen } 
},
{
    contentComponent: SideBar
},
{
    initialRouteName: "Home"
}

)
