import React from 'react';
import {  Text, View, TextInput, KeyboardAvoidingView, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import db from "../config";
import firebase from "firebase";
import MyHeader from "../components/MyHeader";

export default class RequestScreen extends React.Component {
    constructor(){
        super();
        this.state = {
            userId: firebase.auth().currentUser.email,
            bookName: '',
            reason: ''
        }
    }
createUniqueID = function(){
    return Math.random().toString(36).substring(2, 7)
}
    addRequest = (bookname, reason1)=>{
        var randomId = this.createUniqueID();
        db.collection("requested_books").add({
            User_ID: this.state.userId,
            book_name: bookname,
            reason_to_request: reason1,
            request_id: randomId
        })
        this.setState({
            bookName: '',
            reason: ''
        })
        return alert("request added succesfully")
    }

  render(){
    return (
        <View>
            <MyHeader title="Request Book">

            </MyHeader>

            <KeyboardAvoidingView style={styles.keyBoardStyle}>
                <TextInput placeholder="Book Name"
                    onChangeText={(text)=>{
                        this.setState({
                            bookName: text
                        })
                    }}
                    style={styles.formTextInput}
                >

                </TextInput>
                <TextInput placeholder="Reason For Request" style={{height: 80}} multiline={true} onChangeText={(text)=>{
                    this.setState({
                        reason: text
                    })
                }}
                style={styles.formTextInput}
                ></TextInput>
                <TouchableOpacity onPress={
                    ()=>{
                        this.addRequest(this.state.bookName, this.state.reason)
                    }
                } 
                
                    style={styles.button}
                >
                    <Text>Request</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>

        </View>
    );}
}

const styles = StyleSheet.create({
    keyBoardStyle : {
      flex:1,
      alignItems:'center',
      justifyContent:'center'
    },
    formTextInput:{
      width:"75%",
      height:35,
      alignSelf:'center',
      borderColor:'#ffab91',
      borderRadius:10,
      borderWidth:1,
      marginTop:20,
      padding:10,
    },
    button:{
      width:"75%",
      height:50,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:10,
      backgroundColor:"#ff5722",
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 8,
      },
      shadowOpacity: 0.44,
      shadowRadius: 10.32,
      elevation: 16,
      marginTop:20
      },
    }
  )