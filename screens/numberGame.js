import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import Swiper from "react-native-web-swiper";
import * as firebase from "firebase";
import SwiperFlatList from "react-native-swiper-flatlist";
//import 'firebase/firestore';
import { firebaseConfig } from "../config/ApiKeys.demo";
//import * as firebase from "firebase";
const db = firebase.database();
let itemsRef = db.ref("/Game2");

//const db =firebase.database().ref();
//const question =db.collection('Game1');
//const db = app.database();
//const itemsRef =db1.collection('/Game1');

export default class Game extends React.Component {
  state = {
    questions: [], //Шалгалтын асуулт
    answers: [], //Шалгалтын хариу
    loading: true,
    userAnswers: [], // Хэрэглэгчийн хариулт
    questionIndex: 0,
    correctAnswer: [],
    result: 0,
  };

  componentDidMount() {
    itemsRef.on("value", (snapshot) => {
      let questions = [];
      snapshot.forEach((x) => {
        let item = x.val();
        let key = x.key;
        questions.push({ key, ...item });
      });
      this.setState({ questions });
    });

    //alert(firebase.storage().ref().child('animal/'))

    //
  }

  render() {
    let aKyes;
    return (
     
      
      <SwiperFlatList
        data={this.state.questions}
        index={4}
        renderItem={({ item }) => (
          
          <View>
          <Text>
            { item!==null ? "Асуулт:" +
              item.questions +
              "Хариулт :\n" +
              item.answer.join("\n"): ""}
              
          </Text>
          </View>
         
        
        )}
        showPagination
      />
      
      
    );
  }
}
