import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  Button,
  TouchableHighlight,
  FlatList,
  TextInput,
} from "react-native";
import * as firebase from "firebase";

const rootQuestions = firebase.database().ref();
const questionsRef = rootQuestions.child("questions");

export default class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question1: [],
      newQuestions: "",
      loading: false,
    };
  }

  componentDidMount() {
    questionsRef.on("value", (childSnapShot) => {
      const question1 = [];
      childSnapshot.forEach((doc) => {
        question1.push({
          key: doc.key,
          questions: doc.toJSON().questions,
        });
        this.setState({
          question1: question1,
          loading: false,
        });
      });
    });
  }
  onPressAdd = () => {
    if (this.state.newQuestions.trim() === "") {
      alert("Асуулт хоосон байна");
      return;
    }
    questionsRef.push({
      question: this.state.newQuestions,
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <View>
          <TextInput
            style={{
              height: 40,
              width: 200,
              margin: 10,
              padding: 10,
              borderColor: "black",
              borderWidth: 1,
              color: black,
            }}
            keyboardType="default"
            placeholderTextColor="black"
            placeholder="Асуулт нэмэх"
            autoCapitalize="none"
            onChangeText={(text) => {
              this.setState({ newQuestions: text });
            }}
            value={this.state.newQuestions}
          />
          <TouchableHighlight
            style={{
              marginRight: 10,
            }}
            underlayColor="tomato"
            onPress={this.onPressAdd}
          >
            <Image
              style={{
                width: 35,
                height: 35,
              }}
              source={require("")}
            />
          </TouchableHighlight>
        </View>

        <FlatList
          data={this.state.question}
          renderItem={({ item, index }) => {
            return (
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  margin: 10,
                }}
              >
                {" "}
                {item.questions}
              </Text>
            );
          }}
        ></FlatList>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
