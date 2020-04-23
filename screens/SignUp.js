import React from "react";
import { StyleSheet, View, Text, TextInput, Button, Alert } from "react-native";
import { NavigationActions } from "react-navigation";
import * as firebase from "firebase";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      passwordConfirm: "",
    };
  }

  onBackToLogin = () => {
    this.props.navigation.navigate("Login");
  };

  onPressSignUp = () => {
      if(this.state.password !== this.state.passwordConfirm){
          Alert.alert("Пассфорт тохирохгүй байна дахин хийнэ үү !");
          return;
      }
    firebase
      .auth()
      .createUserWithEmailAndPassword(
        this.state.email,
        this.state.password,
        this.state.passwordConfirm
      ).then(()=>{

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
        <TextInput
          style={styles.TextInputPass}
          value={this.state.passwordConfirm}
          onChangeText={(text) => this.setState({ passwordConfirm: text})}
        />
        <Button title="Бүртгэх" onPress={this.onPressSignUp} />
        <Button title="Буцах" onPress={this.onBackToLogin} />
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
