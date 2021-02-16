import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from "firebase";
import {DrawerItems} from "react-navigation-drawer";
import { TouchableOpacity } from 'react-native';

export default class SideBar extends React.Component {
  render(){
    return (
        <View>
            <View>
                <DrawerItems
                {...this.props} 
                >
                    
                </DrawerItems>
            </View>
            <View>
              <TouchableOpacity
                onPress={
                  ()=>{
                    this.props.navigation.navigate("WelcomeScreen")
                    firebase.auth().signOut();
                  }
                }
                style={{
                  color: "#FF9800",
                  borderWidth: "40%",
                  borderRadius: 10
                }}
              >
                <Text
                style={{
                  color:'#ffff',
                  fontWeight:'200',
                  fontSize:20
                }}
                >
                  Log Out
                </Text>
              </TouchableOpacity>
            </View>
        </View>
    )
  }
}




