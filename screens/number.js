import React from "react";
import { StyleSheet, Text, View, Icon, Image, ImageBackground } from "react-native";
import Swiper from "react-native-web-swiper";
//import SoundPlayer from "react-native-sound-player";

class Component extends React.Component {
  render() {
    handlePlay = () => {
      {
        /* try {
          alert('hi')
      play the file tone.mp3
        SoundPlayer.playSoundFile("../assets/Audio/test", 'aac')
         or play from urlnpm install --save @react-native-firebase/app
      SoundPlayer.playUrl("https://example.com/music.mp3");
      } catch (e) {
        console.log(`cannot play the sound file`, e);
      } */
      }
    };
    return (
      <View style={styles.container}>
        <ImageBackground
      source={require("../assets/animal/back2.jpg")}
      resizeMode="stretch"
      style={styles.container} >
        <Swiper>
          <View style={[styles.slideContainer, styles.slide1]}>
           
            <Text style={styles.sharText}>Шар шувуу</Text>
          </View>
          <View style={[styles.slideContainer, styles.slide2]}>
            

            <Text style={styles.anaashText}>Эрээн тахь</Text>
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
  },
  anaashText: {
    paddingTop: 100,
    fontSize: 24,
    fontWeight: "bold",
  },

});

export default Component;
