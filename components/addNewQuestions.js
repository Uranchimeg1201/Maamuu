import * as React from "react";

import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  Alert,
  TextInput,
  Button,
  TouchableHighlight,
} from "react-native";
import Swiper from "react-native-web-swiper";
import * as firebase from "firebase";
import SwiperFlatList from "react-native-swiper-flatlist";
//import 'firebase/firestore';
import { firebaseConfig } from "../config/ApiKeys.demo";
import { Checkbox } from "react-native-paper";
//import * as firebase from "firebase";
//const db = firebase.database();
//let itemsRef = db.ref("/Game2");

export default class Game extends React.Component {
  addNewData(number, answer1, answer2, answer3, answer4, correctAnswer, questions) {
    firebase
      .database()
      .ref("/Game2" + number  + correctAnswer + questions)
      .push({
        number,
        answer1,
        answer2,
        answer3,
        answer4,
        correctAnswer,
        questions,
      
      })
      .then(() => {
        Alert.alert("Амжилттай бүртгэгдлээ");
      }).catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("../assets/logo/admin.jpg")}
          resizeMode="stretch"
          style={styles.container}
        >
          <Text style={styles.text}>Add New Questions and Answer </Text>

          <TextInput
            style={styles.from}
            placeholder="enter number"
            onChangeText={(number) => this.setState({ number })}
          />
          <TextInput
            style={styles.from}
            placeholder="enter answer1"
            onChangeText={(answer1) => this.setState({ answer1 })}
          />
          <TextInput
            style={styles.from}
            placeholder="enter answer2"
            onChangeText={(answer2) => this.setState({ answer2 })}
          />
          <TextInput
            style={styles.from}
            placeholder="enter answer3"
            onChangeText={(answer3) => this.setState({ answer3 })}
          />
          <TextInput
            style={styles.from}
            placeholder="enter answer4"
            onChangeText={(answer4) => this.setState({ answer4 })}
          />
            <TextInput
            style={styles.from}
            placeholder="correctAnswer index"
            onChangeText={(correctAnswer) => this.setState({ correctAnswer})}
          />
          <TextInput
            style={styles.from}
            placeholder="enter  Question"
            onChangeText={(questions) => this.setState({ questions })}
          />
          <TouchableHighlight
            style={{
              height: 40,
              width: 150,
              borderRadius: 10,
              backgroundColor: "black",
              marginLeft: 50,
              marginRight: 50,
              marginTop: 20,
              justifyContent: "center",
            }}
          >
            <Button
              title="Add"
              color="white"
              onPress={() =>
                this.addNewData(
                  this.state.number,
                  this.state.answer1,
                  this.state.answer2,
                  this.state.answer3,
                  this.state.answer4,
                  this.state.correctAnswer,
                  this.state.questions
                )
              }
            />
          </TouchableHighlight>
        </ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    width: "100%",
    height: "100%",
  },

  from: {
    marginTop: 20,
    borderColor: "black",
    width: 250,
    height: 45,
    borderWidth: 2,
  },
  text: {
    marginTop: -50,
    fontSize: 25,
  },
});
