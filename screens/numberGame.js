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
  Animated,
} from "react-native";
import Swiper from "react-native-web-swiper";
import * as firebase from "firebase";
import SwiperFlatList from "react-native-swiper-flatlist";
//import 'firebase/firestore';
import { firebaseConfig } from "../config/ApiKeys.demo";
import { Checkbox } from "react-native-paper";
import Finish from "../components/gameFinish";
//import * as firebase from "firebase";
const db = firebase.database();
let itemsRef = db.ref("/Game2");

//const db =firebase.database().ref();
//const question =db.collection('Game1');
//const db = app.database();
//const itemsRef =db1.collection('/Game1');

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
  question: {
    shadowColor: "#5895D6",
    shadowOpacity: 1,
    shadowRadius: 1,
    fontSize: 42,
    color: "#7558D6",
    marginRight: 30,
  },
  answer: {
    shadowColor: "#5895D6",
    shadowOpacity: 1,
    shadowRadius: 1,
    color: "red",
    marginRight: 30,
  },
});

export default class Game extends React.Component {
  state = {
    questions: [], //Шалгалтын асуулт
    answers: [], //Шалгалтын хариу
    loading: true,
    userAnswers: [], // Хэрэглэгчийн хариулт
    questionIndex: 0,
    correctAnswer: 0,
    worngAnswer: 0,
    result: 0,
    currentCheckedAnswer: 0,
    currentIndexOfQuestion: 0,
    isLastTest: false,
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
          <Finish/>
        </View>
      );
    let {
      questions,
      currentCheckedAnswer,
      currentIndexOfQuestion,
    } = this.state;
    let current = questions[currentIndexOfQuestion];
    let currentAnswers = [...current.answer];
    currentAnswers.shift(1);
    console.log(currentAnswers);
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("../assets/logo/4.jpg")}
          resizeMode="stretch"
          style={styles.container}
        >
          <View style={styles.header}>
            <Text style={styles.question}> {current.questions} </Text>
          </View>
          <View style={styles.answer}>
            {currentAnswers.map((ans, index) => (
              <Checkbox.Item
                key={index}
                label={ans}
                status={
                  currentCheckedAnswer === index + 1 ? "checked" : "unchecked"
                }
                onPress={() => {
                  if (current.correctAnswer == index + 1) {
                    if (questions[currentIndexOfQuestion + 1]) {
                      this.setState({
                        currentIndexOfQuestion: currentIndexOfQuestion + 1,
                      });
                    } else {
                      this.setState({ isLastTest: true });
                    }
                  }
                  // alert("Зөв хариулт нь:" + current.correctAnswer[]);
                  else this.setState({ currentCheckedAnswer: index + 1 });
                }}
              />
            ))}
          </View>
        </ImageBackground>
      </View>
    );
  }
}
