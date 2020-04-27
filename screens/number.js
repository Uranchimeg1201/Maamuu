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
            <View style={[styles.slideContainer, styles.slide1]}>
              <Image
                style={styles.image1}
                source={require("../assets/number/one2.png")}
              />
              <Text style={styles.sharText}>Нэг</Text>
            </View>
            <View style={[styles.slideContainer, styles.slide1]}>
              <Image
                style={styles.image1}
                source={require("../assets/number/two.png")}
              />
              <Text style={styles.sharText}>Хоёр</Text>
            </View>
            <View style={[styles.slideContainer, styles.slide1]}>
              <Image
                style={styles.image1}
                source={require("../assets/number/three.png")}
              />
              <Text style={styles.sharText}>Гурав</Text>
            </View>
            <View style={[styles.slideContainer, styles.slide1]}>
              <Image
                style={styles.image1}
                source={require("../assets/number/four.png")}
              />
              <Text style={styles.sharText}>Дөрөв</Text>
            </View>
            <View style={[styles.slideContainer, styles.slide1]}>
              <Image
                style={styles.image1}
                source={require("../assets/number/five.png")}
              />
              <Text style={styles.sharText}>Тав</Text>
            </View>
            <View style={[styles.slideContainer, styles.slide1]}>
              <Image
                style={styles.image1}
                source={require("../assets/number/six.png")}
              />
              <Text style={styles.sharText}>Зургаа</Text>
            </View>
            <View style={[styles.slideContainer, styles.slide1]}>
              <Image
                style={styles.image1}
                source={require("../assets/number/seven.png")}
              />
              <Text style={styles.sharText}>Долоо</Text>
            </View>
            <View style={[styles.slideContainer, styles.slide1]}>
              <Image
                style={styles.image1}
                source={require("../assets/number/eight.png")}
              />
              <Text style={styles.sharText}>Найм</Text>
            </View>
            <View style={[styles.slideContainer, styles.slide1]}>
              <Image
                style={styles.image1}
                source={require("../assets/number/nine.png")}
              />
              <Text style={styles.sharText}>Ес</Text>
            </View>
            <View style={[styles.slideContainer, styles.slide1]}>
              <Image
                style={styles.image1}
                source={require("../assets/number/ten.png")}
              />
              <Text style={styles.sharText}>Арав</Text>
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
    width: "30%",
    height: "30%",
  },
});

export default Component;
