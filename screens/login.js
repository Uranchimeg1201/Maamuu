import React from "react";
import { StyleSheet, View, Text, TextInput , Button, Alert} from "react-native";
import {NavigationActions} from  'react-navigation';
import * as firebase from 'firebase'; 



export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  onPressSign = () => {
    {/* var navActions =NavigationActions.reset({
          index:0,
          actions: [
              NavigationActions.navigate({routeName:'SignUp'})
          ]
            
          
      });
    this.props.navigation.dispatch(navActions); */}
    this.props.navigation.navigate('SignUp')
  }
  onPressLogin = () => {
      firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(()=>{

      }, (error) => {
         Alert.alert(error.message);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.TextInputEmail}
          value={this.state.email}
          onChangeText={(text) => this.setState({ email: text })}
        />
        <TextInput
          style={styles.TextInputPass}
          value={this.state.password}
          onChangeText={(text) => this.setState({ password: text })}
        />
        <Button title='Нэвтрэх' onPress = {this.onPressLogin}/>
        <Button title = 'Бүртгүүлэх' onPress={this.onPressSign}/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  TextInputEmail: {
    width: 200,
    height: 40,
    borderWidth: 2,
  },
  TextInputPass: {
    width: 200,
    height: 40,
    borderWidth: 2,
    marginTop: 20,
  },
});
