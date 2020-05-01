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



class Game extends React.Component {
  
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("../assets/logo/play.jpg")}
          resizeMode="stretch"
          style={styles.container}
        >
         
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

  
});

export default Game;
