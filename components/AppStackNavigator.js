import * as React from 'react';
import { createStackNavigator } from "react-navigation-stack";
import DonationScreen from "../screens/donatescreen";
import ReciverDetails from "../screens/ReciverDetails";

export const AppStackNavigator = createStackNavigator({
    DonationScreen: {screen: DonationScreen, 
        
    },
    ReciverDetails: {screen: ReciverDetails,
       
    }
},{
    initialRouteName: "DonationScreen"
})

