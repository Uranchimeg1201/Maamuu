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
import Swiper from "react-native-web-swiper";

import { Audio, Video } from "expo-av";
import { animals } from "../components/data";
import { Sounds } from "../components/data";

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
    console.log("animals:: ", animals);
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("../assets/animal/back2.jpg")}
          resizeMode="stretch"
          style={styles.container}
        >
          <Swiper>
            {animals.map((animal, index) => (
              <View key={index} style={[styles.slideContainer, styles.slide1]}>
                <Image style={styles.image1} source={animal.imageUrl} />
                <TouchableOpacity
                  onPress={() => this.handlePlaySound(animal.playSound)}
                >
                  <Text style={styles.sharText}>{animal.name}</Text>
                </TouchableOpacity>
              </View>
            ))}

            <View style={[styles.slideContainer, styles.slide4]}>
              <Image
                style={styles.image4}
                source={require("../assets/animal/bvrged.png")}
              />
              <Text style={styles.bvrgedText}>Бүргэд</Text>
            </View>
            <View style={[styles.slideContainer, styles.slide5]}>
              <Image
                style={styles.image5}
                source={require("../assets/animal/bar.png")}
              />
              <Text style={styles.bvrgedText}>Бар</Text>
            </View>

            <View style={[styles.slideContainer, styles.slide9]}>
              <Image
                style={styles.image9}
                source={require("../assets/animal/toti.png")}
              />
              <Text style={styles.bvrgedText}>Тоть</Text>
            </View>
            <View style={[styles.slideContainer, styles.slide10]}>
              <Image
                style={styles.image10}
                source={require("../assets/animal/anaash.png")}
              />
              <Text style={styles.bvrgedText}>Анааш</Text>
            </View>
            <View style={[styles.slideContainer, styles.slide10]}>
              <Image
                style={styles.image11}
                source={require("../assets/animal/tuulai.png")}
              />
              <Text style={styles.bvrgedText}>Туулай</Text>
            </View>
            <View style={[styles.slideContainer, styles.slide11]}>
              <Image
                style={styles.image12}
                source={require("../assets/animal/mogoi.png")}
              />
              <Text style={styles.bvrgedText}>Могой</Text>
            </View>
            <View style={[styles.slideContainer, styles.slide11]}>
              <Image
                style={styles.image13}
                source={require("../assets/animal/ostrich.png")}
              />
              <Text style={styles.bvrgedText}>Тэмээн хяруул</Text>
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
  image1: {
    marginTop: 30,
    height: "40%",
    width: "51%",
  },

  image4: {
    marginLeft: 25,
    height: "40%",
    width: "85%",
  },
  image5: {
    height: 200,
    width: 300,
  },

  image9: {
    marginTop: 30,
    height: "42%",
    width: "50%",
  },
  image10: {
    paddingTop: 30,
    height: 290,
    width: 210,
  },
  image11: {
    paddingTop: 30,
    height: 180,
    width: 120,
  },
  image12: {
    paddingTop: 30,
    height: 180,
    width: 200,
  },
  image13: {
    height: 400,
    width: 327,
  },
  sharText: {
    paddingTop: 50,
    fontSize: 24,
    fontWeight: "bold",
  },
  anaashText: {
    paddingTop: 100,
    fontSize: 24,
    fontWeight: "bold",
  },
  arslanText: {
    paddingTop: 80,
    fontWeight: "bold",
    fontSize: 24,
  },
  bvrgedText: {
    paddingTop: 80,
    fontWeight: "bold",
    fontSize: 24,
  },
});

export default Component;
