import React from "react";
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity} from "react-native";
import Swiper from "react-native-web-swiper";
import {Audio} from 'expo-av';
const xyloSounds = {
  one: require("../assets/Audio/AnimalVideo/8.mp3"),
  two: require("../assets/Audio/AnimalVideo/9.mp3"),
  three: require("../assets/Audio/AnimalVideo/11.mp3"),
  four: require("../assets/Audio/AnimalVideo/Home.mp3"),
  five: require("../assets/Audio/AnimalVideo/7.mp3"),
  six: require("../assets/Audio/AnimalVideo/Home 2.mp3"),
  seven: require("../assets/Audio/AnimalVideo/Home 6.mp3"),
  eight: require("../assets/Audio/AnimalVideo/Home 3.mp3"),
  nine: require("../assets/Audio/AnimalVideo/Home 2.mp3"),
  ten: require("../assets/Audio/AnimalVideo/Home 4.mp3"),
  
};

 class Animal extends React.Component {
  PlaySound = async (note) => {
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
  render() { return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/flag/back2.jpg")}
        resizeMode="stretch"
        style={styles.container}
      >
        <Swiper>
          <View style={[styles.slideContainer, styles.slide1]}>
            <Image
              style={styles.image1}
              source={require("../assets/flag/mongolia.png")}
            />
            <TouchableOpacity onPress={() => this.PlaySound("one")}>
            <Text style={styles.mongolText}>Улс: Монгол</Text>
            <Text style={styles.UbText}>Нийслэл хот : Улаанбаатар</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.slideContainer, styles.slide1]}>
            <Image
              style={styles.image1}
              source={require("../assets/flag/canada.png")}
            />
            <TouchableOpacity onPress={() => this.PlaySound("two")}>
            <Text style={styles.mongolText}>Улс: Канад</Text>
            <Text style={styles.UbText}>Нийслэл хот : Оттава</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.slideContainer, styles.slide1]}>
            <Image
              style={styles.image1}
              source={require("../assets/flag/russia.png")}
            />
            <TouchableOpacity onPress={() => this.PlaySound("three")}>
            <Text style={styles.mongolText}>Улс: Орос</Text>
            <Text style={styles.UbText}>Нийслэл хот : Москва</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.slideContainer, styles.slide1]}>
            <Image
              style={styles.image3}
              source={require("../assets/flag/china-flag.png")}
            />
            <Text style={styles.mongolText}>Улс: Хятад</Text>
            <Text style={styles.UbText}>Нийслэл хот : Бээжин</Text>
          </View>
          <View style={[styles.slideContainer, styles.slide1]}>
            <Image
              style={styles.image1}
              source={require("../assets/flag/argentina.png")}
            />
            <Text style={styles.mongolText}>Улс: Аргентин</Text>
            <Text style={styles.UbText}>Нийслэл хот : Буэнос Айрес</Text>
          </View>
          <View style={[styles.slideContainer, styles.slide1]}>
            <Image
              style={styles.image1}
              source={require("../assets/flag/australia.png")}
            />
            <Text style={styles.mongolText}>Улс: Австрали</Text>
            <Text style={styles.UbText}>Нийслэл хот : Канберра</Text>
          </View>
          <View style={[styles.slideContainer, styles.slide1]}>
            <Image
              style={styles.image1}
              source={require("../assets/flag/north-korea.png")}
            />
            <Text style={styles.mongolText}>Улс: Хойд Солонгос</Text>
            <Text style={styles.UbText}>Нийслэл хот : Пхеньян</Text>
          </View>

          <View style={[styles.slideContainer, styles.slide1]}>
            <Image
              style={styles.image1}
              source={require("../assets/flag/usa2.png")}
            />
            <Text style={styles.mongolText}>Улс: Америкийн Нэгдсэн Улс</Text>
            <Text style={styles.UbText}>Нийслэл хот : Вашингтон</Text>
          </View>
          <View style={[styles.slideContainer, styles.slide1]}>
            <Image
              style={styles.image1}
              source={require("../assets/flag/belgium.png")}
            />
            <Text style={styles.mongolText}>Улс: Бельги</Text>
            <Text style={styles.UbText}>Нийслэл хот : Брюссель</Text>
          </View>
          <View style={[styles.slideContainer, styles.slide1]}>
            <Image
              style={styles.image1}
              source={require("../assets/flag/brazil.png")}
            />
            <Text style={styles.mongolText}>Улс: Бразил</Text>
            <Text style={styles.UbText}>Нийслэл хот : Бразилиа</Text>
          </View>
        
          <View style={[styles.slideContainer, styles.slide1]}>
            <Image
              style={styles.image1}
              source={require("../assets/flag/costa-rica.png")}
            />
            <Text style={styles.mongolText}>Улс: Коста-Рика</Text>
            <Text style={styles.UbText}>Нийслэл хот : Сан-Хосе</Text>
          </View>
          <View style={[styles.slideContainer, styles.slide1]}>
            <Image
              style={styles.image1}
              source={require("../assets/flag/cuba.png")}
            />
            <Text style={styles.mongolText}>Улс: Куба</Text>
            <Text style={styles.UbText}>Нийслэл хот : Гавана</Text>
          </View>
          <View style={[styles.slideContainer, styles.slide1]}>
            <Image
              style={styles.image1}
              source={require("../assets/flag/finland.png")}
            />
            <Text style={styles.mongolText}>Улс: Финланд</Text>
            <Text style={styles.UbText}>Нийслэл хот : Хельсинки</Text>
          </View>
          <View style={[styles.slideContainer, styles.slide1]}>
            <Image
              style={styles.image1}
              source={require("../assets/flag/france.png")}
            />
            <Text style={styles.mongolText}>Улс: Франц</Text>
            <Text style={styles.UbText}>Нийслэл хот : Парис</Text>
          </View>
          <View style={[styles.slideContainer, styles.slide1]}>
            <Image
              style={styles.image1}
              source={require("../assets/flag/japan.jpg")}
            />
            <Text style={styles.mongolText}>Улс: Япон</Text>
            <Text style={styles.UbText}>Нийслэл хот : Токио</Text>
          </View>
          <View style={[styles.slideContainer, styles.slide1]}>
            <Image
              style={styles.image1}
              source={require("../assets/flag/netherlands.png")}
            />
            <Text style={styles.mongolText}>Улс: Нидерланд</Text>
            <Text style={styles.UbText}>Нийслэл хот : Амстердам</Text>
          </View>
          <View style={[styles.slideContainer, styles.slide1]}>
            <Image
              style={styles.image1}
              source={require("../assets/flag/ireland.png")}
            />
            <Text style={styles.mongolText}>Улс: Ирланд</Text>
            <Text style={styles.UbText}>Нийслэл хот : Дублин</Text>
          </View>
          <View style={[styles.slideContainer, styles.slide1]}>
            <Image
              style={styles.singa}
              source={require("../assets/flag/singapore.jpg")}
            />
            <Text style={styles.mongolText}>Улс: Сингапур</Text>
            <Text style={styles.UbText}>Нийслэл хот : Сингапур</Text>
          </View>
          <View style={[styles.slideContainer, styles.slide1]}>
            <Image
              style={styles.image1}
              source={require("../assets/flag/turkey.png")}
            />
            <Text style={styles.mongolText}>Улс: Турк</Text>
            <Text style={styles.UbText}>Нийслэл хот : Анкара</Text>
          </View>
          <View style={[styles.slideContainer, styles.slide1]}>
            <Image
              style={styles.image1}
              source={require("../assets/flag/yemen.png")}
            />
            <Text style={styles.mongolText}>Улс: Йемен</Text>
            <Text style={styles.UbText}>Нийслэл хот : Санаа</Text>
          </View>
          <View style={[styles.slideContainer, styles.slide1]}>
            <Image
              style={styles.image1}
              source={require("../assets/flag/zimbabwe.png")}
            />
            <Text style={styles.mongolText}>Улс: Зимбабве</Text>
            <Text style={styles.UbText}>Нийслэл хот : Хараре</Text>
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

    height: 170,
    width: 320,
    borderWidth: 2,
  },
  image3: {
    marginTop: 30,
    height: 180,
    width: 300,
    borderWidth: 2,
  },

  singa: {
    marginTop: 30,
    height: 190,
    width: 290,
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