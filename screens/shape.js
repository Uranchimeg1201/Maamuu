import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Icon,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import * as fabfirebaseapp from "firebase";
import Swiper from "react-native-web-swiper";
import { Audio } from "expo-av";
import { Sounds, shapes } from "../components/data";

class Component extends React.Component {
  handlePlaySound = async (note) => {
    const soundObject = new Audio.Sound();

    try {
      let source = Sounds[note];
      // let source = require('./assets/note1.wav')
      await soundObject.loadAsync(source);
      await soundObject
        .playAsync()
        .then(async (playbackStatus) => {
          setTimeout(() => {
            soundObject.unloadAsync();
          }, playbackStatus.playableDurationMillis);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("../assets/shape/back3.png")}
          resizeMode="stretch"
          style={styles.container}
        >
          <Swiper>
            {shapes.map((shape, index) => (
              <View key={index} style={[styles.slideContainer, styles.slide1]}>
                <Image style={styles.image1} source={shape.imageUrl} />
                <TouchableOpacity
                  onPress={() => this.handlePlaySound(shape.playSound)}
                >
                  <Text style={styles.sharText}>{shape.name}</Text>
                </TouchableOpacity>
              </View>
            ))}
            <View style={[styles.slideContainer, styles.slide1]}>
              <Image
                style={styles.image2}
                source={require("../assets/shape/oval.png")}
              />
              <Text style={styles.sharText}>Зууван</Text>
            </View>
            <View style={[styles.slideContainer, styles.slide1]}>
              <Image
                style={styles.image3}
                source={require("../assets/shape/pentagon.png")}
              />
              <Text style={styles.sharText}>Таван талт</Text>
            </View>
            <View style={[styles.slideContainer, styles.slide1]}>
              <Image
                style={styles.image4}
                source={require("../assets/shape/tegshontsogt.png")}
              />
              <Text style={styles.sharText}>Тэгш өнцөгт</Text>
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

  sharText: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 50,
  },
  image1: {
    marginTop: 100,
    width: 200,
    height: 200,
  },
  image2: {
    marginTop: 100,
    width: 200,
    height: 100,
  },
  image3: {
    marginTop: 100,
    width: 200,
    height: 190,
  },
  image4: {
    marginTop: 100,
    width: "60%",
    height: "20%",
  },
});

export default Component;
