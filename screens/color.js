import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Icon,
  Image,
  ImageBackground,
  Button,
  Card,
  TouchableHighlight,
} from "react-native";
import Swiper from "react-native-web-swiper";
//import SoundPlayer from "react-native-sound-player";

class Component extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("../assets/color/back.jpg")}
          resizeMode="stretch"
          style={styles.container}
        >
          <Swiper>
            <View style={[styles.slideContainer, styles.slide1]}>
              <TouchableHighlight style={styles.shar}>
                <Button title="Шар" />
              </TouchableHighlight>
            </View>
            <View style={[styles.slideContainer, styles.slide1]}>
              <TouchableHighlight style={styles.nogoon}>
                <Button title="Ногоон" color="black" />
              </TouchableHighlight>
            </View>
            <View style={[styles.slideContainer, styles.slide1]}>
              <TouchableHighlight style={styles.blue}>
                <Button title="Цэнхэр" color="white" />
              </TouchableHighlight>
            </View>
            <View style={[styles.slideContainer, styles.slide1]}>
              <TouchableHighlight style={styles.red}>
                <Button title="Улаан" color="white" />
              </TouchableHighlight>
            </View>
            <View style={[styles.slideContainer, styles.slide1]}>
              <TouchableHighlight style={styles.pink}>
                <Button title="Яагаан" color="white" />
              </TouchableHighlight>
            </View>
            <View style={[styles.slideContainer, styles.slide1]}>
              <TouchableHighlight style={styles.white}>
                <Button title="Цагаан" color="black" />
              </TouchableHighlight>
            </View>
            <View style={[styles.slideContainer, styles.slide1]}>
              <TouchableHighlight style={styles.black}>
                <Button title="Хар" color="white" />
              </TouchableHighlight>
            </View>
            <View style={[styles.slideContainer, styles.slide1]}>
              <TouchableHighlight style={styles.ulaanhvren}>
                <Button title="Улаан хүрэн" color="white" />
              </TouchableHighlight>
            </View>
            <View style={[styles.slideContainer, styles.slide1]}>
              <TouchableHighlight style={styles.saaral}>
                <Button title="Саарал" color="white" />
              </TouchableHighlight>
            </View>
            <View style={[styles.slideContainer, styles.slide1]}>
              <TouchableHighlight style={styles.orange}>
                <Button title="Улбар шар" color="white" />
              </TouchableHighlight>
            </View>
          </Swiper>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slideContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  shar: {
    height: 200,
    width: 200,
    borderRadius: 10,
    backgroundColor: "yellow",
    marginLeft: 50,
    marginRight: 50,
    marginTop: 20,
    justifyContent: "center",
  },
  nogoon: {
    height: 200,
    width: 200,
    borderRadius: 10,
    backgroundColor: "lime",
    marginLeft: 50,
    marginRight: 50,
    marginTop: 20,
    justifyContent: "center",
  },
  blue: {
    height: 200,
    width: 200,
    borderRadius: 10,
    backgroundColor: "blue",
    marginLeft: 50,
    marginRight: 50,
    marginTop: 20,
    justifyContent: "center",
  },
  red: {
    height: 200,
    width: 200,
    borderRadius: 10,
    backgroundColor: "red",
    marginLeft: 50,
    marginRight: 50,
    marginTop: 20,
    justifyContent: "center",
  },
  pink: {
    height: 200,
    width: 200,
    borderRadius: 10,
    backgroundColor: "pink",
    marginLeft: 50,
    marginRight: 50,
    marginTop: 20,
    justifyContent: "center",
  },
  white: {
    height: 200,
    width: 200,
    borderRadius: 10,
    backgroundColor: "white",
    marginLeft: 50,
    marginRight: 50,
    marginTop: 20,
    justifyContent: "center",
    borderWidth: 1,
  },
  black: {
    height: 200,
    width: 200,
    borderRadius: 10,
    backgroundColor: "black",
    marginLeft: 50,
    marginRight: 50,
    marginTop: 20,
    justifyContent: "center",
  },
  ulaanhvren: {
    height: 200,
    width: 200,
    borderRadius: 10,
    backgroundColor: "brown",
    marginLeft: 50,
    marginRight: 50,
    marginTop: 20,
    justifyContent: "center",
  },
  saaral: {
    height: 200,
    width: 200,
    borderRadius: 10,
    backgroundColor: "rgb(153, 163, 164)",
    marginLeft: 50,
    marginRight: 50,
    marginTop: 20,
    justifyContent: "center",
  },
  orange: {
    height: 200,
    width: 200,
    borderRadius: 10,
    backgroundColor: "orange",

    marginLeft: 50,
    marginRight: 50,
    marginTop: 20,
    justifyContent: "center",
  },
});

export default Component;
