import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from "firebase";
import db from "../config";
import MyHeader from "../components/MyHeader"
import { TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native';


export default class SettingsScreen extends React.Component {

    constructor(){
        super();
        this.state = {
            contact: "",
            lastname: "",
            firstname: "",
            address: "",
            docId: "",
            emailId: firebase.auth().currentUser.email
        }
    }


    getUserDetails = async()=>{
        db.collection("users").where("email_Id", "==", this.state.emailId).get().then((snapshot)=>{
            snapshot.forEach((doc)=>{
                var data = doc.data();
                this.setState({
                    firstname: data.first_name,
                    lastname: data.last_name,
                    contact: data.contact,
                    address: data.address,
                    docId: doc.id
                })
            })
        })
    }

    componentDidMount(){
        this.getUserDetails();
        console.log(this.state.emailId)
    }

    updateUserDetails = ()=>{
        db.collection("users").doc(this.state.docId).update({
            first_name: this.state.firstname,
            last_name: this.state.lastname,
            contact: this.state.contact,
            address: this.state.address
        })
        alert("Changes Updated");
    }


  render(){
    return (
        <View
        
        style={
             {   flex:1,
                backgroundColor:'#F8BE85',
                alignItems: 'center',
                justifyContent: 'center'}
              
        }>

            <View
            style={{
                flex: 1,
                width: "100%",
                alignItems: 'center'
            }}
            >
                            <MyHeader 
                title = "Settings Screen"
                navigation = {this.props.navigation}
            >

            </MyHeader>
                <TextInput 
                    onChangeText={
                        (text)=>{
                            this.setState({
                                firstname: text
                            })
                        }
                    }
                    placeholder="First Name"
                    style={styles.textInputStyle}
                    value={this.state.firstname} 
                ></TextInput>
                <TextInput 
                
                onChangeText={
                    (text)=>{
                        this.setState({
                            lastname: text
                        })
                    }
                }
                placeholder="Last Name"
                style={styles.textInputStyle}
                value={this.state.lastname}
                
                ></TextInput>
                <TextInput 
                                    onChangeText={
                                        (text)=>{
                                            this.setState({
                                                contact: text
                                            })
                                        }
                                    }
                                    placeholder="Contact"
                                    keyboardType="numeric"
                                    style={styles.textInputStyle}
                                    value={this.state.contact}
                ></TextInput>
                <TextInput 
                        onChangeText={
                            (text)=>{
                                this.setState({
                                    address: text
                                })
                            }
                        }
                        style={styles.textInputStyle}
                    placeholder="Address"
                    multiline={true}
                    value={this.state.address}
                ></TextInput>
                <TouchableOpacity
                style={styles.button}
                onPress={this.updateUserDetails}
                ><Text style={styles.buttonText}> Save Changes </Text></TouchableOpacity>

            </View>
        </View>
    );
  }
}


const styles = StyleSheet.create({
    textInputStyle: {
        width: "50%",
        height: 40,
        alignSelf: 'center',
        borderColor: "black",
        borderWidth: 1,
        marginTop: 20,
        padding: 10
    }   ,
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
        marginTop: 20,
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

