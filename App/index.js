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
import ApiKeys from '../config/ApiKeys.demo';


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
  


