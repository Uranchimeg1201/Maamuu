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
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import * as firebase from "firebase";
import { NavigationEvents } from "react-navigation";

export default class Admin extends React.Component {
  onDeleteImagePress = async () => {};
  addNewQuestions = () => {
    this.props.navigation.navigate("addNewQuestions");
  };
  uploadPicture = () => {
    this.props.navigation.navigate("UploadPicture");
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
            <Text style={styles.admin}>Админ</Text>
          </View>

          <View style={styles.container}>
            <TouchableHighlight style={styles.Touch}>
              <Button
                title="Зураг оруулах"
                color="white"
                onPress={this.uploadPicture}
              />
            </TouchableHighlight>
            <TouchableHighlight style={styles.Touch}>
              <Button
                title="Зураг устгах"
                color="white"
                onPress={this.onDeleteImagePress}
              />
            </TouchableHighlight>
            <TouchableHighlight style={styles.Touch}>
              <Button
                title="Асуулт оруулах"
                color="white"
                onPress={this.addNewQuestions}
              />
            </TouchableHighlight>
            <TouchableHighlight style={styles.Touch}>
              <Button
                title="Асуулт засах"
                color="white"
                onPress={this.onChooseImagePress}
              />
            </TouchableHighlight>
            <TouchableHighlight style={styles.Touch1}>
              <Button
                title="Асуулт устгах"
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
    marginLeft: -220,
  },
  Touch: {
    height: 50,
    width: 150,
    borderRadius: 10,
    backgroundColor: "#7558D6",
    marginLeft: 50,
    marginRight: 50,

    alignItems: "center",
    justifyContent: "center",
    marginBottom: 25,
  },
  Touch1: {
    height: 50,
    width: 150,
    borderRadius: 10,
    backgroundColor: "#7558D6",
    marginLeft: 50,
    marginRight: 50,

    alignItems: "center",
    justifyContent: "center",
    marginBottom: 200,
  },
});
