import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  TouchableHighlight,
} from "react-native";
import Swiper from "react-native-web-swiper";
import * as firebase from "firebase";
import SwiperFlatList from "react-native-swiper-flatlist";
//import 'firebase/firestore';
import { firebaseConfig } from "../config/ApiKeys.demo";
import { Checkbox, Button } from "react-native-paper";
import { Audio, Video } from "expo-av";
import { AntDesign } from "@expo/vector-icons";
import FinishGame from "../components/gameFinish";

console.disableYellowBox = true;
const db = firebase.database();
let itemsRef = db.ref("/Game3");

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
  title: {
    textAlign: "center",
    color: "white",
    marginVertical: 8,
  },
});

export default class Listen extends React.Component {
  state = {
    questions: [], //Шалгалтын асуулт
    currentCheckedAnswer: 0, // Хэрэглэгчийн сонгосон хариулт
    currentIndexOfQuestion: 0, // Асуултын index
    isLastTest: false, // Хамгийн сүүлийн асуулт 
    failedCount: 0, // Хэрэглэгчийн алдсан оноог тоолох хувьсагч
  };

  constructor(props) {
    super(props);
    this.playSound = this.playSound.bind(this);
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

  playSound = () => {
    let { questions, currentIndexOfQuestion } = this.state;
    let current = questions[currentIndexOfQuestion];
    let source = { uri: current.questions };

    try {
      Audio.Sound.createAsync(source, { shouldPlay: true }).then(
        (sound, status) => {
          console.log(sound, status);
          sound.loadAsync();
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    if (!this.state.questions.length)
      return <View style={styles.container}></View>;
    if (this.state.isLastTest)
      return (
        <View style={styles.container}>
          <FinishGame  failedCount={this.state.failedCount} navigation={this.props.navigation}/>
        </View>
      );

    let {
      questions,
      currentIndexOfQuestion,
      currentCheckedAnswer,
    } = this.state;
    let current = questions[currentIndexOfQuestion];
    let currentAnswers = [...current.answer];
    currentAnswers.shift(1);
    console.log(current.correctAnswer);
    console.log(currentCheckedAnswer);
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("../assets/logo/rainbow.jpg")}
          resizeMode="stretch"
          style={styles.container}
        >
          <View style={styles.header}>
            <TouchableHighlight
              style={{
                height: 130,
                width: 130,
                borderRadius: 65,
                backgroundColor: "pink",
                marginLeft: 50,
                marginRight: 50,
                marginTop: 30,
                marginTop: 100,
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={this.playSound}
            >
              <AntDesign name="sound" size={72} color="black" />
              {/* <Text style={styles.title}>Тоглуулах</Text> */}
            </TouchableHighlight>
          </View>
          <FlatList
            numColumns={2}
            keyExtractor={(item) => item.id}
            data={currentAnswers}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity
                  style={{
                    borderColor: "red",
                  }}
                  key={index}
                  onPress={() => {
                    console.log(
                      "current correctAnswer::",
                      current.correctAnswer
                    );
                    console.log("index::", index);

                    if (current.correctAnswer == index + 1) {
                      if (questions[currentIndexOfQuestion + 1]) {
                        this.setState({
                          currentIndexOfQuestion: currentIndexOfQuestion + 1,
                          currentCheckedAnswer: 0,
                        });
                      } else {
                        this.setState({ isLastTest: true });
                      }
                    }
                    this.setState({ currentCheckedAnswer: index + 1 , failedCount: ++this.state.failedCount});
                  }}
                >
                  <Image
                    style={{
                      width: 150,
                      height: 150,
                      //display: '',
                      resizeMode:'stretch',
                      justifyContent: "center",
                      alignContent: "center",
                      alignItems: "center",
                      marginLeft: 30,
                      marginTop: 30,
                      marginRight: 30,
                      borderColor: "black",
                      borderWidth: 3,
                    }}
                    source={{ uri: item }}
                  />
                </TouchableOpacity>
              );
            }}
          />
          
        </ImageBackground>
      </View>
    );
  }
}
