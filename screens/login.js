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
  TouchableHighlight,
  Item,
  Label,
} from "react-native";
import { NavigationActions } from "react-navigation";
import { Entypo } from "@expo/vector-icons";
import * as firebase from "firebase";
import * as Google from "expo-google-app-auth";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  //  componentDidMount() {
  //    this.checkIfLoggedIn();
  //  }

  // checkIfLoggedIn = () => {
  //   firebase.auth().onAuthStateChanged(
  //     function (user) {
  //       console.log("aldaa");
  //       if (user) {
  //         this.props.navigation.navigate("Admin");
  //       } else {
  //         this.props.navigation.navigate("Video");
  //       }
  //     }
  //   );
  // };

  onPressSign = () => {
    {
      /* var navActions =NavigationActions.reset({
          index:0,
          actions: [
              NavigationActions.navigate({routeName:'SignUp'})
          ]
            
          
      });
    this.props.navigation.dispatch(navActions); */
    }
    this.props.navigation.navigate("SignUp");
  };
  onPressLogin = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(
        () => {
          this.props.navigation.navigate("admin");
        },
        (error) => {
          Alert.alert(error.message);
        }
      );
  };
  isUserEqual = (googleUser, firebaseUser) => {
    if (firebaseUser) {
      var providerData = firebaseUser.providerData;
      for (var i = 0; i < providerData.length; i++) {
        console.log(providerData)
        if (
          providerData[i].providerId ===
            firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
          providerData[i].uid === googleUser.getBasicProfile().getId()
        ) {
          // We don't need to reauth the Firebase connection.
          return true;
        }
      }
    }
    return false;
  };
  onSignIn = (googleUser) => {
    console.log("Google Auth Response", googleUser);
    this.props.navigation.navigate('admin');
    // We need to register an Observer on Firebase Auth to make sure auth is initialized.
    // var unsubscribe = firebase.auth().onAuthStateChanged(
    //   function (firebaseUser) {
    //     unsubscribe();
    //     // Check if we are already signed-in Firebase with the correct user.
    //     if (!this.isUserEqual(googleUser, firebaseUser)) {
    //       // Build Firebase credential with the Google ID token.
    //       var credential = firebase.auth.GoogleAuthProvider.credential(
    //         googleUser.idToken,
    //         googleUser.accessToken
    //       );
    //       // Sign in with credential from the Google user.
    //       firebase
    //         .auth()
    //         .signInAndRetrieveDataWithCredential(credential)
    //         .then(function (result) {
    //           this.props.navigation.navigate("admin");
    //           console.log("signed in");
    //           if (result.additionalUserInfo.isNewUser) {
                
    //             firebase
    //               .database()
    //               .ref("/users/" + result.user.uid)
    //               .set({
    //                 gmail: result.user.gmail,
    //                 profile_picture: result.additionalUserInfo.profile.picture,
    //                 local: result.additionalUserInfo.profile.locale,
    //                 first_name: result.additionalUserInfo.profile.given_name,
    //                 last_name: result.additionalUserInfo.profile.family_name,
    //                 created_at: Date.now(),
    //               })
    //               .then(function (snapshot) {
    //                 // console.log('Aldaa');
    //               });
    //           } else {
    //             firebase
    //               .database()
    //               .ref("/users/" + result.user.uid)
    //               .update({
    //                 last_logged_in: Date.now(),
    //               });
    //           }
    //         })
    //         .catch(function (error) {
    //           // Handle Errors here.
    //           var errorCode = error.code;
    //           var errorMessage = error.message;
    //           // The email of the user's account used.
    //           var email = error.email;
    //           // The firebase.auth.AuthCredential type that was used.
    //           var credential = error.credential;
    //           // ...
    //         });
    //     } else {
    //       console.log("User already signed-in Firebase.");
    //     }
    //   }
    // );
  };
  signInWithGoogleAsync = async () => {
    try {
      const result = await Google.logInAsync({
        behavior: "web",
        iosClientId:
          "221543229523-tdhlppglc83pkfsgeflro0lk7unhn115.apps.googleusercontent.com",

        scopes: ["profile", "email"],
      });

      if (result.type === "success") {
        this.onSignIn(result);
        return result.accessToken;
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      return { error: true };
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("../assets/logo/kids.jpg")}
          resizeMode="stretch"
          style={styles.container}
        >
          <Image
            style={styles.image}
            source={require("../assets/logo/kids2.png")}
            resizeMode="stretch"
          />
          <Text style={styles.Login}>Login</Text>
          <TextInput
            style={styles.TextInputEmail}
            value={this.state.email}
            placeholder="Email"
            placeholderTextColor="green"
            onChangeText={(text) => this.setState({ email: text })}
          />

          <TextInput
            style={styles.TextInputPass}
            value={this.state.password}
            placeholder="Password"
            placeholderTextColor="green"
            onChangeText={(text) => this.setState({ password: text })}
          />
          <View style={styles.row}>
            <TouchableHighlight
              style={{
                height: 40,
                width: 100,
                borderRadius: 10,
                backgroundColor: "#2ECC71",
                borderColor: "green",
                borderWidth: 2,
                marginTop: 20,
                justifyContent: "center",
              }}
            >
              <Button title="Enter" color="black" onPress={this.onPressLogin} />
            </TouchableHighlight>

            <TouchableHighlight
              style={{
                height: 40,
                width: 110,
                borderRadius: 10,
                backgroundColor: "#2ECC71",
                borderColor: "green",
                borderWidth: 2,
                marginLeft: 10,
                marginTop: 20,
                justifyContent: "center",
              }}
            >
              <Button
                title="Sign In"
                color="black"
                rounded
                onPress={this.onPressSign}
              />
            </TouchableHighlight>
          </View>
          <TouchableHighlight
            style={{
              height: 40,
              width: 110,
              borderRadius: 10,
              //backgroundColor: "orange",
              borderWidth: 2,
              shadowColor: "grey",
              shadowOpacity: 1,
              shadowRadius: 1,
              marginLeft: 10,
              marginTop: 20,
              justifyContent: "center",
            }}
          >
            <Button
              title="Google"
              color="black"
              onPress={this.signInWithGoogleAsync}
            />
          </TouchableHighlight>
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
    width: 200,
    height: 40,
    borderWidth: 2,
    marginTop: 30,
    borderRadius: 4,
    borderColor: "black",
  },
  TextInputPass: {
    width: 200,
    height: 40,
    borderWidth: 2,
    marginTop: 20,
    borderRadius: 4,
    borderColor: "black",
  },
  image: {
    width: 90,
    height: 90,
    marginTop: -150,
    borderRadius: 100,
  },
  row: {
    marginTop: 30,
    flexDirection: "row",
  },
  Login: {
    shadowColor: "#5895D6",
    shadowOpacity: 1,
    shadowRadius: 1,
    fontSize: 42,
    color: "#7558D6",
  },
});
