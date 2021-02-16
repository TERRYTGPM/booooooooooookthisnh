import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Header, Icon} from "react-native-elements" 

const MyHeader = props=> {
    return(
        <Header centerComponent={{
            text: props.title,
            style: {
                color: "grey",
                fontSize: 20,
                fontWeight: "bold",
            }
        }}
        backgroundColor="cyan">
            
        </Header>
    )
}   
export default MyHeader;