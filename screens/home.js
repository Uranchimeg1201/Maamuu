import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";

import firebase from "../config/firebase";

export default function App({ navigation }) {

  useEffect(()=>{
    setTimeout(()=>{
      console.log('rest')
      navigation.push('rest')
    }, 5000)
  }, []);

  const onPressHandler = (item) => {
    const db = firebase.storage();
    navigation.push(item.navigation);
  };

  const option = [
    {
      name: "Амьтан",
      id: "1",
      navigation: "Animal",
      img: require("../assets/PageImage/animals.jpg"),
    },
    {
      name: "Улс",
      id: "2",
      navigation: "Flag",
      img: require("../assets/PageImage/flag.jpg"),
    },
    {
      name: "Өнгө",
      id: "3",
      navigation: "Color",
      img: require("../assets/PageImage/colors.jpg"),
    },
    {
      name: "Тоо",
      id: "4",
      navigation: "Number",
      img: require("../assets/PageImage/number.jpg"),
    },
    {
      name: "Дүрс",
      id: "5",
      navigation: "Shape",
      img: require("../assets/PageImage/shape.jpg"),
    },
    {
      name: "Тоглох",
      id: "6",
      navigation: "Play",
      img: require("../assets/logo/playhome.jpg"),
    },
  ];



  return (
    <ImageBackground
      source={require("../assets/maamuubackground.png")}
      style={styles.container}
    >
      <View style={styles.inner}>
        <FlatList
          numColumns={2}
          keyExtractor={(item) => item.id}
          data={option}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => onPressHandler(item)}>
              <Image style={styles.image} source={item.img} />
              <Text style={styles.text}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    paddingHorizontal: 20,
    justifyContent: "center",
  },

  inner: {
    width: "100%",
    height: "90%",
    backgroundColor: "rgba(255, 255, 255, .5 )",
    // display: "flex",
    flexDirection: "column",
  },
  text: {
    flex: 1,
    marginHorizontal: 40,
    marginTop: 20,
    // backgroundColor: "rgb(200, 255, 255 )",
    fontSize: 24,
    fontWeight: "bold",
    borderColor: "rgb(0,153,0)",
    borderWidth: 2,
    borderStyle: 'dashed',
    borderRadius: 10,
    borderEndWidth: 10,
    minWidth: 120,
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },

  image: {
    width: 100,
    height: 100,
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    marginLeft: 50,
    marginTop: 30,
    borderColor: 'black',
    borderWidth: 3,
  },
});
