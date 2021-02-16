import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
  Modal,
  KeyboardAvoidingView,
} from 'react-native';
import db from '../config';
import firebase from 'firebase';
import { ScrollView } from 'react-native-gesture-handler';

export default class WelcomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      emailId: '',
      password: '',
      modalVisibility: false,
      firstname: '',
      lastname: '',
      contact: '',
      address: '',
      confirmpassword: '',
    };
  }

  userLogin = (emailId, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(emailId, password)
      .then(() => {
        this.props.navigation.navigate("DonationScreen");
        return alert('Successfully Login');
        
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        return alert(errorMessage);
      });
  };

  userSignUp = (emailId, password, confirmpassword) => {
if(password !== confirmpassword){
  return alert("you suck. try entering the password corectly this time")
}else{
      firebase
      .auth()
      .createUserWithEmailAndPassword(emailId, password)
      .then(() => {
        db.collection("users").add({
          first_name: this.state.firstname,
          last_name: this.state.lastname,
          contact: this.state.contact,
          address: this.state.address,
          email_Id: this.state.emailId
        })
        return alert('User Added Successfully', "", [{text: "OK", onPress: ()=>{
          this.setState({
            modalVisibility: false
          })
        }}])
      })     .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        return alert(errorMessage);
      });


 
    };
  }
  showModal = () => {
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={this.state.modalVisibility}
        >
        <View style={styles.modalContainer}>
          <ScrollView >
            <KeyboardAvoidingView style={styles.KeyboardAvoidingView}>
              <Text style={styles.modalTitle}>REGISTARATION</Text>
              <TextInput
                placeholder="Email Adress"
                onChangeText={(text) => {
                  this.setState({
                    emailId: text,
                  });
                }}
                  style={styles.formTextInput}
                ></TextInput>
              <TextInput
                placeholder="First Name"
                onChangeText={(text) => {
                  this.setState({
                    firstname: text,
                  });
                }}
                style={styles.formTextInput}></TextInput>
              <TextInput
                placeholder="Last Name"
                onChangeText={(text) => {
                  this.setState({
                    lastname: text,
                  });
                }}
                style={styles.formTextInput}></TextInput>

              <TextInput
                placeholder="Address"
                onChangeText={(text) => {
                  this.setState({
                    address: text,
                  });
                }}
                style={styles.formTextInput}></TextInput>
              <TextInput
                placeholder="Contact Number"
                onChangeText={(text) => {
                  this.setState({
                    contact: text,
                  });
                }}
                style={styles.formTextInput}></TextInput>
              <TextInput
                placeholder="Password"
                secureTextEntry={true}
                maxLength={32}
                minLength={6}
                onChangeText={(text) => {
                  this.setState({
                    password: text,
                  });
                }}
                style={styles.formTextInput}></TextInput>
              <TextInput
                placeholder="Confirm Password"
                secureTextEntry={true}
                onChangeText={(text) => {
                  this.setState({
                    confirmpassword: text,
                  });
                }}
                style={styles.formTextInput}></TextInput>
              <TouchableOpacity onPress={()=>{
                this.userSignUp(this.state.emailId, this.state.password, this.state.confirmpassword)
              }}
              style={styles.registerButton}>
                <Text style={styles.registerButtonText}> Confirm </Text>
              </TouchableOpacity>
              <TouchableOpacity
              style={styles.cancelButton}
              onPress={()=>{this.setState({modalVisibility: false })}}>
                <Text style={styles.registerButtonText}> Cancel </Text>
              </TouchableOpacity>
            </KeyboardAvoidingView>
          </ScrollView>
        </View>
      </Modal>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
        </View>
        {
          this.showModal()
        }
        <View style={styles.profileContainer}>
          <Text style={styles.title}>Book Santa</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TextInput
            style={styles.loginBox}
            placeholder="example@booksanta.com"
            placeholderTextColor="#ffff"
            keyboardType="email-address"
            onChangeText={(text) => {
              this.setState({
                emailId: text,
              });
            }}
          />

          <TextInput
            style={styles.loginBox}
            secureTextEntry={true}
            placeholder="password"
            placeholderTextColor="#ffff"
            onChangeText={(text) => {
              this.setState({
                password: text,
              });
            }}
          />
          <TouchableOpacity
            style={[styles.button, { marginBottom: 20, marginTop: 20 }]}
            onPress={() => {
              this.userLogin(this.state.emailId, this.state.password);
            }}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.setState({
                modalVisibility: true
              })
            }}>
            <Text style={styles.buttonText}>SignUp</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
   flex:1,
   backgroundColor:'#F8BE85',
   alignItems: 'center',
   justifyContent: 'center'
 },
 profileContainer:{
   flex:1,
   justifyContent:'center',
   alignItems:'center',
 },
 title :{
   fontSize:65,
   fontWeight:'300',
   paddingBottom:30,
   color : '#ff3d00'
 },
 loginBox:{
   width: 300,
   height: 40,
   borderBottomWidth: 1.5,
   borderColor : '#ff8a65',
   fontSize: 20,
   margin:10,
   paddingLeft:10
 },
 KeyboardAvoidingView:{
   flex:1,
   justifyContent:'center',
   alignItems:'center'
 },
 modalTitle :{
   justifyContent:'center',
   alignSelf:'center',
   fontSize:30,
   color:'#ff5722',
   margin:50
 },
 modalContainer:{
   flex:1,
   borderRadius:20,
   justifyContent:'center',
   alignItems:'center',
   backgroundColor:"#ffff",
   marginRight:30,
   marginLeft : 30,
   marginTop:80,
   marginBottom:80,
 },
 formTextInput:{
   width:"75%",
   height:35,
   alignSelf:'center',
   borderColor:'#ffab91',
   borderRadius:10,
   borderWidth:1,
   marginTop:20,
   padding:10
 },
 registerButton:{
   width:200,
   height:40,
   alignItems:'center',
   justifyContent:'center',
   borderWidth:1,
   borderRadius:10,
   marginTop:30
 },
 registerButtonText:{
   color:'#ff5722',
   fontSize:15,
   fontWeight:'bold'
 },
 cancelButton:{
   width:200,
   height:30,
   justifyContent:'center',
   alignItems:'center',
   marginTop:5,
 },

 button:{
   width:300,
   height:50,
   justifyContent:'center',
   alignItems:'center',
   borderRadius:25,
   backgroundColor:"#ff9800",
   shadowColor: "#000",
   shadowOffset: {
      width: 0,
      height: 8,
   },
   shadowOpacity: 0.30,
   shadowRadius: 10.32,
   elevation: 16,
   padding: 10
 },
 buttonText:{
   color:'#ffff',
   fontWeight:'200',
   fontSize:20
 }
})