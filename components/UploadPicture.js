import React from "react";
import {
  Text,
  Image,
  View,
  Button,
  StyleSheet,
  Alert,
  TouchableHighlight,
  ImageBackground,
  Picker,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import * as firebase from "firebase";
import { NavigationEvents } from "react-navigation";

export default class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      paths: [],
    };
  }

  async componentDidMount() {
    await Permissions.askAsync(Permissions.CAMERA_ROLL);
    await Permissions.askAsync(Permissions.CAMERA);

    var ref = firebase.storage().ref("/");
    var res = await ref.listAll();

    for (var folderRef of res.prefixes) {
      this.setState({ paths: [...this.state.paths, folderRef.fullPath] });
      console.log("folder" + folderRef);
    }
  }

  onFolder = () => {
    console.log("folder" + folderRef);
  };

  onChooseImagePress = async () => {
    //let result = await ImagePicker.launchCameraAsync();
    let result = await ImagePicker.launchImageLibraryAsync();

    if (!result.cancelled) {
      this.uploadImage(result.uri, "newimage" + new Date().getTime())

        .then(() => {
          Alert.alert("Амжилттай бүртгэгдлээ");
        })
        .catch((error) => {
          Alert.alert(error);
        });
    }
  };
  uploadImage = async (uri, imageName) => {
    const response = await fetch(uri);
    const blob = await response.blob();

    var ref = firebase
      .storage()
      .ref()
      .child("newImage/" + imageName);
    return ref.put(blob);
  };
  render() {
    return (
      <View style={styles.container1}>
        <ImageBackground
          source={require("../assets/logo/admin.jpg")}
          resizeMode="stretch"
          style={styles.container1}
        >
          <View style={styles.container}>
            <Image
              style={styles.image}
              source={require("../assets/logo/kids2.png")}
            />
            <Text style={styles.admin}>Зураг оруулах</Text>
          </View>
         
          <View style={styles.container}>
            <TouchableHighlight style={styles.Touch}>
              <Button
                title="Зураг оруулах"
                color="white"
                onPress={this.onChooseImagePress}
              />
            </TouchableHighlight>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignContent: "center",
    alignItems: "center",
    //flexDirection: "row",
    justifyContent: "center",
  },
  image: {
    marginTop: -80,
    height: "30%",
    width: "35%",
    borderRadius: 80,
    marginRight: 200,
  },

  admin: {
    shadowColor: "#5895D6",
    shadowOpacity: 1,
    shadowRadius: 1,
    fontSize: 42,
    color: "#7558D6",
    fontStyle: "italic",
    marginLeft: -100,
  },
  Touch: {
    height: 50,
    width: 150,
    borderRadius: 10,
    backgroundColor: "#7558D6",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 25,
  },
});
