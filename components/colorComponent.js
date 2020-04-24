import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ImageBackground,
} from "react-native";

import Navigator from '../navigation/drawer';
import * as firebase from 'firebase';
import ApiKeys, { firebaseConfig } from '../config/ApiKeys.demo';



export default class  App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      isAuthenticationReady: false,
      isAuthenticated: false,
    };
  
  // initialize firebase ...
  // Initialize firebase...
  if (!firebase.apps.length) { firebase.initializeApp(ApiKeys.FirebaseConfig); }
  firebase.auth().onAuthStateChanged(this.onAuthStateChanged);

  } 
  onAuthStateChanged = (user) =>{
    this.setState({isAuthenticationReady: true});
    this.setState({isAuthenticated: !!user});
  }
  
  render() {return(

    <Navigator/>

  );
  }
}
  




// tusdaa

componentDidMount(){
  this.checkIfLogged();
}
checkIfLogged = () => {
  firebase.auth().onAuthStateChanged(function(user)
  {
    if(user)
    {
      this.props.navigation.navigate("Home");
    }
    else{
      this.props.navigation.navigate("Login");
    }
  }.bind(this)
  );
};

//apiConfig



{
  /*export const firebaseConfig ={
  apiKey: "AIzaSyBKzPqmh1ZpOGpi9WZKK2j3bwZu990KdQU",
  authDomain: "maamuu-78a10.firebaseapp.com",
  databaseURL: "https://maamuu-78a10.firebaseio.com",
  projectId: "maamuu-78a10",
  storageBucket: "maamuu-78a10.appspot.com",
  messagingSenderId: "221543229523",
  appId: "1:221543229523:web:8fa5d02a29ba6263ab7ea6",
  measurementId: "G-BQ06XGTLLF"

}
*/
}
