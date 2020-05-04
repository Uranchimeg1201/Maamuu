import * as React from 'react';

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
import { Checkbox, Button } from 'react-native-paper';
import { Audio, Video } from "expo-av";
//import * as firebase from "firebase";
const db = firebase.database();
let itemsRef = db.ref("/Game3");

//const db =firebase.database().ref();
//const question =db.collection('Game1');
//const db = app.database();
//const itemsRef =db1.collection('/Game1');


const styles = StyleSheet.create({
  container: {
        alignItems:'center',
        justifyContent:'center',
        flex:1
    },
     header: {
        alignSelf: 'stretch',
        alignItems: 'center',
    },
  text:{
      //flex: 1,
      justifyContent:'center',
  },
  title: {
    textAlign: 'center',
    color: 'white',
    marginVertical: 8,
  },
  image: {
    width: 100,
    height: 100,
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    marginLeft: 50,
    marginTop: 30,
    borderColor: 'black',
    borderWidth: 3,
  },
});

export default class Listen extends React.Component {
  state = {
    questions: [], //Шалгалтын асуулт
    answers: [], //Шалгалтын хариу
    loading: true,
    userAnswers: [], // Хэрэглэгчийн хариулт
    questionIndex: 0,
    correctAnswer: [],
    result: 0,
    currentCheckedAnswer: 0,
    currentIndexOfQuestion: 0,
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
      console.log(questions)
      this.setState({ questions });
    });  
    //alert(firebase.storage().ref().child('animal/'))
  }

  playSound = () => {
    let {questions, currentIndexOfQuestion} = this.state; 
    let current = questions[currentIndexOfQuestion];

    let source = { uri: current.questions}

    try {
      Audio.Sound.createAsync(
        source,
        { shouldPlay: true }
      ).then((sound, status ) => {
          console.log(sound, status);
          sound.loadAsync();
      });
      // Your sound is playing!
    } catch (error) {
      // An error occurred!
    }
  }

  render() {
    if(!this.state.questions.length) return  <View style={styles.container}></View>;

    let {questions, currentIndexOfQuestion} = this.state; 
    let current = questions[currentIndexOfQuestion];
    let currentAnswers = [...current.answer];
    currentAnswers.shift(1);
    console.log(currentAnswers);
    return (
      <View style={styles.container}>
        <View style={styles.header}>
        
       
        <TouchableHighlight
            style={{
              height: 40,
              width: 100,
              borderRadius: 10,
              backgroundColor: "blue",
              marginLeft: 50,
              marginRight: 50,
              marginTop: 30,
              
              justifyContent: "center",
            }}
            onPress={this.playSound}
          >
            <Text style={styles.title}>Play</Text>
          </TouchableHighlight>

        </View>
        <FlatList
          numColumns={2}
          keyExtractor={(item) => item.id}
          data={currentAnswers}
          renderItem={({ item, index }) => {
              return (
                <TouchableOpacity key={index} onPress={() => {
                    console.log("current::", current.correctAnswer)
                    console.log("index::", index)
                    if(current.correctAnswer == (index + 1)){
                      this.setState({currentIndexOfQuestion: currentIndexOfQuestion+1});
                    } 
                  }}>
                  <Image style={styles.image} source={{uri: item}}/>
                </TouchableOpacity>
              )
          }}
        />
        {/* <View>
          {currentAnswers.map((ans, index) => (
            <Checkbox.Item key={index} label={ans} status="checked" onPress={() => {
              console.log(current.correctAnswer, ans)
              if(current.correctAnswer == (index + 1)){
                this.setState({currentIndexOfQuestion: currentIndexOfQuestion+1});
              } 
            }}/>
          ))}
          
        </View> */}
      </View>
        
    );
  }
}


  

