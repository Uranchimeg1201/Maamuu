import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";

//import Header from "../components/header";
import Handler from "../components/handler";

export default function App({ navigation }) {
  const onPressHandler = (item) => {
    navigation.push(item.navigation);
  };

  const option = [
    {
      name: "Амьтан",
      id: "1",
      navigation: "Animal",
      img: require("../assets/PageImage/flag.jpg"),
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
      img: require("../assets/PageImage/flag.jpg"),
    },
    {
      name: "Тоо",
      id: "4",
      navigation: "Number",
      img: require("../assets/PageImage/flag.jpg"),
    },
    {
      name: "Дүрс",
      id: "5",
      navigation: "Shape",
      img: require("../assets/PageImage/flag.jpg"),
    },
    {
      name: "Тоглх",
      id: "6",
      navigation: "Play",
      img: require("../assets/PageImage/flag.jpg"),
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
    marginTop: 50,
    padding: 0,
    // backgroundColor: "rgb(200, 255, 255 )",
    fontSize: 24,
    fontWeight: "bold",
    borderColor: "rgb(0,153,0)",
    borderWidth: 2,
    borderStyle: "dashed",
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
    marginTop: 20,
  },
});
