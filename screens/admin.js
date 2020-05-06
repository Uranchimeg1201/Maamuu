import React from "react";
import { Text, Image, View, Button, StyleSheet, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from 'expo-permissions';  
import * as firebase from "firebase";

export default class Admin extends React.Component {
  state = {
    image: null,
    uploading: false,
  };

  async componentDidMount() {
    await Permissions.askAsync(Permissions.CAMERA_ROLL);
    await Permissions.askAsync(Permissions.CAMERA);
  }
  onChooseImagePress = async () => {
    //let result = await ImagePicker.launchCameraAsync();
    let result = await ImagePicker.launchImageLibraryAsync();

    if (!result.cancelled) {
      this.uploadImage(result.uri, "penguin" + new Date().getTime())
     
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
      <View style={styles.container}>
        <Button title="Зураг оруулах" onPress={this.onChooseImagePress} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    alignItems: "center",
  },
});
