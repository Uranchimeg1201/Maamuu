import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  Alert,
  ImageBackground,
  Image,
  TouchableHighlight
} from "react-native";
import { NavigationActions } from "react-navigation";
import * as firebase from "firebase";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  signUpUser = (email, password) => {
    try {
      if (this.state.password.length < 4) {
        Alert.alert("4-өөс доошгүй оронтой байна");
        return;
      } else {
        Alert.alert("Амжилттай бүртгэгдлээ");
        this.props.navigation.navigate("Login");
      }

      firebase.auth().createUserWithEmailAndPassword(email, password);
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  onBackToLogin = () => {
    this.props.navigation.navigate("Login");
  };

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("../assets/logo/sign.jpg")}
          style={styles.container}
        >
          <Image
            style={styles.image}
            resizeMode="stretch"
            source={require("../assets/logo/pro.jpg")}
          />
          <Text style={styles.Sign}>Sign In</Text>
          <TextInput
            style={styles.TextInputEmail}
            value={this.state.email}
            placeholder="Email"
            placeholderTextColor="green"
            onChangeText={(email) => this.setState({ email })}
          />
          
          <TextInput
            style={styles.TextInputPass}
            value={this.state.password}
            placeholder="Password"
            placeholderTextColor="green"
            onChangeText={(password) => this.setState({ password })}
            
          />
          <View style={styles.row}>
          <TouchableHighlight
            style={{
              height: 40,
              width: 90,
              borderRadius: 10,
              backgroundColor: "#58D68D",
              marginLeft: -10,
              marginTop: 20,
              justifyContent: "center",
            }}
          >
            <Button
              title="Login"
              onPress={() =>
                this.signUpUser(this.state.email, this.state.password)
              }
            />
            
            </TouchableHighlight>
            <TouchableHighlight
            style={{
              height: 40,
              width: 90,
              borderRadius: 10,
              backgroundColor: "#58D68D",
              marginLeft: 10,
              marginTop: 20,
              justifyContent: "center",
            }}
          >
            <Button title="Prev.." onPress={this.onBackToLogin} />
            </TouchableHighlight>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  TextInputEmail: {
    marginTop: 30,
    width: 200,
    height: 40,
    borderWidth: 2,
    borderRadius: 4,
  },
  TextInputPass: {
    width: 200,
    height: 40,
    borderWidth: 2,
    marginTop: 20,
    borderRadius: 4,
  },
  row: {
    flexDirection: 'row',
  },
  image: {
    marginTop:-100,
    width: "30%",
    height: "20%",
    borderRadius: 60,
  },
  Sign:{
    shadowColor: "#5895D6",
    shadowOpacity: 1,
    shadowRadius: 1,
    fontSize: 42,
    color: "#7558D6",
  }
});
