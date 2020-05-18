import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Icon,
  Image,
  ImageBackground,
} from "react-native";
import * as fabfirebaseapp from "firebase";
import Swiper from "react-native-web-swiper";
import * as Speech from "expo-speech";
import {Sounds, numbers} from '../components/data';
//import SoundPlayer from "react-native-sound-player";

class Component extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("../assets/number/back.jpg")}
          resizeMode="stretch"
          style={styles.container}
        >
          <Swiper>
            {numbers.map((number, index) => (
            <View key= {index} style={[styles.slideContainer, styles.slide1]}>
              <Image
                style={styles.image1}
                source={number.imageUrl}
              />
              <Text style={styles.sharText}>{number.name}</Text>
            </View>
            ))}
           
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

  sharText: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 50,
  },
  image1: {
    marginTop: 100,
    width: "30%",
    height: "30%",
  },
});

export default Component;
