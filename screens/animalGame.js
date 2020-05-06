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
//import * as Random from 'expo-random';
const db = firebase.database();
let itemsRef = db.ref("/Game1");

//const db =firebase.database().ref();
//const question =db.collection('Game1');
//const db = app.database();
//const itemsRef =db1.collection('/Game1');

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    width: '100%',
    height: '100%',
  },
  header: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  text: {
    //flex: 1,
    justifyContent: "center",
  },
  answer:{

    shadowColor: "#5895D6",
    shadowOpacity: 1,
    shadowRadius: 1,
    fontSize: 42,
    color: "#7558D6",
    marginTop: 20,
  
  }
});

export default class Game extends React.Component {
  state = {
    questions: [], //Шалгалтын асуулт
    answers: [], //Шалгалтын хариу
    loading: true,
    userAnswers: [], // Хэрэглэгчийн хариулт
    questionIndex: 0,
    correctAnswer: [],
    result: 0,
    currentCheckedAnswer: 0,
    currentIndexOfQuestion: 0, // Асуултын index
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
          <Text>YOU COMPLATED TEST</Text>
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
          source={require("../assets/logo/45.jpg")}
          resizeMode='stretch'
          style={styles.container}
        >
        <View style={styles.header}>
          <Image
            source={{ uri: current.questions }}
            style={{ width: 210, height: 280 }}
          />  
        </View>
        <View>
          {currentAnswers.map((ans, index) => (
            <Checkbox.Item
              style={styles.answer}
              key={index}
              label={ans}
              status={
                currentCheckedAnswer === index + 1 ? "checked" : "unchecked"
              }
              onPress={() => {
                console.log(current.correctAnswer, ans);
                if (current.correctAnswer == index + 1) {
                  if (questions[currentIndexOfQuestion + 1]) {
                    this.setState({
                      currentIndexOfQuestion: currentIndexOfQuestion + 1,
                    });
                  } else {
                    this.setState({ isLastTest: true });
                  }
                }
                this.setState({ currentCheckedAnswer: index + 1 });
              }}
            />
          ))}
        </View>
        </ImageBackground>
      </View>
    );
  }
}
