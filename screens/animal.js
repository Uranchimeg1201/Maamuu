import React from "react";
import { StyleSheet, Text, View, Icon } from "react-native";
import Swiper from "react-native-web-swiper";
//import SoundPlayer from "react-native-sound-player";

class Component extends React.Component {
  render() {
    handlePlay = () => {
      try {
          alert('hi')
        // play the file tone.mp3
        //SoundPlayer.playSoundFile("../assets/Audio/test", 'aac')
        // or play from url
        //SoundPlayer.playUrl("https://example.com/music.mp3");
      } catch (e) {
        console.log(`cannot play the sound file`, e);
      }
    };
    return (
      <View style={styles.container}>
        <Swiper>
          <View style={[styles.slideContainer, styles.slide1]}>
            <Text onPress={(e) => this.handlePlay(e)}>Slide 1</Text>
          </View>
          <View style={[styles.slideContainer, styles.slide2]}>
            <Text>Slide 2</Text>
          </View>
          <View style={[styles.slideContainer, styles.slide3]}>
            <Text>Slide 3</Text>
          </View>
        </Swiper>
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
  slide1: {
    backgroundColor: "rgba(20,20,200,0.3)",
  },
  slide2: {
    backgroundColor: "rgba(20,200,20,0.3)",
  },
  slide3: {
    backgroundColor: "rgba(200,20,20,0.3)",
  },
});

export default Component;
