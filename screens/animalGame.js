import * as React from "react";

import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import * as firebase from "firebase";
import { Checkbox } from "react-native-paper";
import Finish from "../components/gameFinish";

const db = firebase.database();
let itemsRef = db.ref("/Game1");

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    width: "100%",
    height: "100%",
  },
  header: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  text: {
    //flex: 1,
    justifyContent: "center",
  },
  answer: {
    marginLeft: 50,
    marginTop: 0,
  },
});

export default class Game extends React.Component {
  state = {
    questions: [], //Шалгалтын асуулт
    currentCheckedAnswer: 0, // Хэрэглэгчийн сонгосон хариулт
    currentIndexOfQuestion: 0, // Асуултын index
    isLastTest: false, // Хамгийн сүүлийн асуулт
    failedCount: 0, // Хэрэглэгчийн алдсан оноог тоолох хувьсагч
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    itemsRef.on("value", (snapshot) => {
      let questions = [];
      snapshot.forEach((x) => {
        let item = x.val();
        let key = x.key;
        questions.push({ key, ...item });
      });
      console.log(questions);
      this.setState({ questions });
    });
    //alert(firebase.storage().ref().child('animal/'))
  }

  render() {
    let aKyes;
    if (!this.state.questions.length)
      return <View style={styles.container}></View>;
    if (this.state.isLastTest)
      return (
        <View style={styles.container}>
          <Finish
            navigation={this.props.navigation}
            failedCount={this.state.failedCount}
          />
        </View>
      );

    let {
      questions,
      currentCheckedAnswer,
      currentIndexOfQuestion,
    } = this.state;
    let current = questions[currentIndexOfQuestion];
    let currentAnswers = [...current.answer]; // create new array  answer
    currentAnswers.shift(1);
    console.log(currentAnswers, currentCheckedAnswer);
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("../assets/logo/animalgame.jpg")}
          resizeMode="stretch"
          style={styles.container}
        >
          <View style={styles.header}>
            <Image
              source={{ uri: current.questions }}
              style={{ width: 150, height: 150, resizeMode: "stretch" }}
            />
          </View>
          <View>
            {currentAnswers.map((ans, index) => (
              <Checkbox.Item
                key={index}
                label={ans}
                labelStyle={{
                  backgroundColor:
                    currentCheckedAnswer == index + 1 ? "red" : "#FFE4B5",
                  fontSize: 25,
                }}
                status={
                  currentCheckedAnswer === index + 1 ? "checked" : "unchecked"
                }
                onPress={() => {
                  if (current.correctAnswer == index + 1) {
                    if (questions[currentIndexOfQuestion + 1]) {
                      this.setState({
                        currentIndexOfQuestion: currentIndexOfQuestion + 1,
                        currentCheckedAnswer: 0,
                      });
                      console.log(
                        "currentCheckedAnswer" + currentCheckedAnswer
                      );
                    } else {
                      this.setState({ isLastTest: true });
                    }
                  } else
                    this.setState({
                      currentCheckedAnswer: index + 1,
                      failedCount: ++this.state.failedCount,
                    });
                }}
              />
            ))}
          </View>
        </ImageBackground>
      </View>
    );
  }
}
