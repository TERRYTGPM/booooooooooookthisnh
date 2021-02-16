import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import db from "../config";
import firebase from "firebase"
import MyHeader from "../components/MyHeader"
import { FlatList } from 'react-native';
import { Icon, ListItem } from 'react-native-elements';



export default class NotificationScreen extends React.Component {


    constructor(){
      
        super();
        this.state = {
            userid: firebase.auth().currentUser.email,
          allNotifications: []
        }
    }

    getNotifications = ()=>{
        
        db.collection("all_notifications").
        where("target_user_id", "==", this.state.userid).
        onSnapshot((s1)=>{
           
            s1.docs.map((doc)=>{
                var a1 = doc.data();
                
                this.state.allNotifications.push(a1)
            })

    })
}


keyExtractor = (item, index) => index.toString();

  renderItem = ({item, index})=>{
    return(
      <ListItem
      key={index}
      leftElement={<Icon
        name="book" type="font-awesome" color='#696969'></Icon>}
        title={item.book_name}
        titleStyle={{ color: 'black', fontWeight: 'bold' }}
        subtitle={item.message}
        bottomDivider
        
      />
    )
  }

    componentDidMount(){
        this.getNotifications();
        console.log(this.state.allNotifications.length)
        console.log(this.state.allNotifications)

    }

  render(){

    return (
        <View>
          
        
            <View>
              <MyHeader title= {"Notifications"} 
                navigation = {this.props.navigation}
              >

              </MyHeader>
            </View>

            <View>
              {
                this.state.allNotifications.length === 0
                ?(
                  <Text >
                    YOU DON'T GOT NO Notifications. you lonely as hell.
                  </Text>
                ): <FlatList
                keyExtractor={this.keyExtractor}
                  data={this.state.allNotifications}
                  renderItem={this.renderItem}


                  
                ></FlatList>
              }
            </View>
            
            
        </View>
    );
  }

}