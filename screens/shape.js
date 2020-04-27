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

//import SoundPlayer from "react-native-sound-player";

const xyloSounds = {
  one: require("../assets/Audio/test.aac"),
};

class Component extends React.Component {
  handlePlaySound = async (note) => {
    const soundObject = new Audio.Sound();

    try {
      let source = xyloSounds[note];
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
            <View style={[styles.slideContainer, styles.slide1]}>
              <Image
                style={styles.image1}
                source={require("../assets/shape/circle.png")}
              />
              <TouchableOpacity onPress={() => this.handlePlaySound("one")}>
                <Text style={styles.sharText}>Дугуй</Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.slideContainer, styles.slide1]}>
              <TouchableOpacity>
                <Image
                  style={styles.image1}
                  source={require("../assets/shape/cross.png")}
                />
                <Text style={styles.sharText}>Хоёр</Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.slideContainer, styles.slide1]}>
              <Image
                style={styles.image1}
                source={require("../assets/shape/hexagon.png")}
              />
              <Text style={styles.sharText}>Зургаан талт</Text>
            </View>
            <View style={[styles.slideContainer, styles.slide1]}>
              <Image
                style={styles.image1}
                source={require("../assets/shape/square.png")}
              />
              <Text style={styles.sharText}>Квадрат</Text>
            </View>
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
            <View style={[styles.slideContainer, styles.slide1]}>
              <Image
                style={styles.image1}
                source={require("../assets/shape/star.png")}
              />
              <Text style={styles.sharText}>Таван хошуу</Text>
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
    width: "60%",
    height: "20%",
  },
  image3: {
    marginTop: 100,
    width: "60%",
    height: "36%",
  },
  image4: {
    marginTop: 100,
    width: "60%",
    height: "20%",
  },
});

export default Component;
