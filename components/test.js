// import * as React from "react";

// import {
//   StyleSheet,
//   View,
//   Text,
//   Image,
//   FlatList,
//   TouchableOpacity,
//   ImageBackground,
// } from "react-native";
// import Swiper from "react-native-web-swiper";
// import * as firebase from "firebase";
// import SwiperFlatList from "react-native-swiper-flatlist";
// //import 'firebase/firestore';
// import { firebaseConfig } from "../config/ApiKeys.demo";
// import { Checkbox } from "react-native-paper";
// //import * as firebase from "firebase";
// const db = firebase.database();
// let itemsRef = db.ref("/Game2");

// //const db =firebase.database().ref();
// //const question =db.collection('Game1');
// //const db = app.database();
// //const itemsRef =db1.collection('/Game1');

// const styles = StyleSheet.create({
//   container: {
//     alignItems: "center",
//     justifyContent: "center",
//     flex: 1,
//   },
//   header: {
//     alignSelf: "stretch",
//     alignItems: "center",
//   },
//   text: {
//     //flex: 1,
//     justifyContent: "center",
//   },
//   question:{
   
//    shadowColor: "#5895D6",
//     shadowOpacity: 1,
//     shadowRadius: 1,
//     fontSize: 52,
//     color: "#7558D6",


//   }
// });

// export default class Game extends React.Component {
//   state = {
//     questions: [], //Шалгалтын асуулт
//     answers: [], //Шалгалтын хариу
//     loading: true,
//     userAnswers: [], // Хэрэглэгчийн хариулт
//     questionIndex: 0,
//     correctAnswer: [],
//     result: 0,
//     currentCheckedAnswer: 0,
//     currentIndexOfQuestion: 0,
//     isLastTest:false,
//   };

//   constructor(props) {
//     super(props);
//   }

//   componentDidMount() {
//     itemsRef.on("value", (snapshot) => {
//       let questions = [];
//       snapshot.forEach((x) => {
//         let item = x.val();
//         let key = x.key;
//         questions.push({ key, ...item });
//       });
//       console.log(questions);
//       this.setState({ questions });
//     });
//   }

//   render() {
//     let aKyes;
//     if (!this.state.questions.length)
//       return <View style={styles.container}></View>;

//     let {
//       questions,
//       currentCheckedAnswer,
//       currentIndexOfQuestion,
//     } = this.state;
//     let current = questions[currentIndexOfQuestion]; // cureent-d questions hadgalsan data onoono 
//     let currentAnswers = [...current.answer];  // create new array firebase-iin answers  hadgalagdana
//     currentAnswers.shift(1); // undefiened ustgasan
//     console.log(currentAnswers);
//     return (
//       <View style={styles.container}>
//         <View style={styles.header}>
//           <Text style= {styles.question}> {current.questions} </Text>
//         </View>
//         <View>
//           {currentAnswers.map((ans, index) => (
//             <Checkbox.Item
//               key={index}
//               label={ans}
//               status="checked"
//               onPress={() => {
//                 if (current.correctAnswer == ans) {
//                   this.setState({
//                     currentIndexOfQuestion: currentIndexOfQuestion + 1,
//                   });
//                 }
//               }}
//             />
//           ))}
//         </View>
//       </View>
//     );
//   }
// }
