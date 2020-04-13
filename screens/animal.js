import React from "react";
import { StyleSheet, Text, View, Icon, Image } from "react-native";
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
         or play from url
      SoundPlayer.playUrl("https://example.com/music.mp3");
      } catch (e) {
        console.log(`cannot play the sound file`, e);
      } */
      }
    };
    return (
      <View style={styles.container}>
        <Swiper>
          <View style={[styles.slideContainer, styles.slide1]}>
            <Image
              style={styles.image1}
              source={require("../assets/animal/shar_shuwuu.png")}
            />
            <Text style={styles.sharText}>Шар шувуу</Text>
          </View>
          <View style={[styles.slideContainer, styles.slide2]}>
            <Image
              style={styles.image2}
              source={require("../assets/animal/tahi.png")}
            />

            <Text style={styles.anaashText}>Эрээн тахь</Text>
          </View>
          <View style={[styles.slideContainer, styles.slide3]}>
            <Image
              style={styles.image3}
              source={require("../assets/animal/arslan.png")}
            />
            <Text style={styles.arslanText}>Арслан</Text>
          </View>
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
          <View style={[styles.slideContainer, styles.slide6]}>
            <Image
              style={styles.image6}
              source={require("../assets/animal/koala.png")}
            />
            <Text style={styles.bvrgedText}>Коала</Text>
          </View>
          <View style={[styles.slideContainer, styles.slide7]}>
            <Image
              style={styles.image7}
              source={require("../assets/animal/penguin.png")}
            />
            <Text style={styles.bvrgedText}>Оцон шувуу</Text>
          </View>
          <View style={[styles.slideContainer, styles.slide8]}>
            <Image
              style={styles.image8}
              source={require("../assets/animal/orca.png")}
            />
            <Text style={styles.bvrgedText}>Сэлэмт халим</Text>
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
    backgroundColor: "#c3f0ca",
  },
  
  image2: {
    paddingTop: 30,
    height: "55%",
    width: "85%",
  },
  image3: {
    height: "60%",
    width: "80%",
  },
  image4: {
    marginLeft: 25,
  },
  image5: {
    height: "50%",
    width: "100%",
  },
  image6: {
    height: "60%",
    width: "80%",
  },
  image7: {
    marginTop: 30,
    height: "55%",
    width: "70%",
  },
  image8: {
    marginTop: 30,
    height: "55%",
    width: "70%",
  },
  image9: {
    marginTop: 30,
    height: "60%",
    width: "70%",
  },
  image10: {
    paddingTop: 30,
    height: "53%",
    width: "62%",
  },
  image11: {
    paddingTop: 30,
    height: "63%",
    width: "72%",
  },
  image12: {
    paddingTop: 30,
    height: "50%",
    width: "90%",
  },
  image13: {
    
    height: 400,
    width: 327,
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
