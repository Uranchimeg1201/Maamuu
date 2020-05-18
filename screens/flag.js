import React from "react";
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity} from "react-native";
import Swiper from "react-native-web-swiper";
import {Audio} from 'expo-av';
import {Sounds, flags} from '../components/data';


 class Animal extends React.Component {
  PlaySound = async (note) => {
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
  render() { return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/flag/back2.jpg")}
        resizeMode="stretch"
        style={styles.container}
      >
        <Swiper>
          {flags.map((flag, index) => (  
          <View key={index} style={[styles.slideContainer, styles.slide1]}>
            <Image
              style={styles.image1}
              source={flag.imageUrl}
            />
            <TouchableOpacity onPress={() => this.PlaySound(flag.playSound)}>
            <Text style={styles.mongolText}>{flag.name}</Text>
            <Text style={styles.UbText}>{flag.name2}</Text>
            </TouchableOpacity>
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
  image1: {
    marginTop: 30,

    height: 170,
    width: 320,
    borderWidth: 2,
  },
  

  mongolText: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 40,
    fontStyle: "italic",
    color: "rgb(46, 204, 113 )",
  },
  UbText: {
    marginTop: 10,
    fontSize: 18,
    color: "rgb(46, 204, 113 )",
    fontStyle: "italic",
    fontWeight: "bold",
  },
});

export default Animal;