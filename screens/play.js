import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Icon,
  Image,
  ImageBackground,
  TouchableOpacity,
  TouchableHighlight,
  Button,
} from "react-native";
import * as fabfirebaseapp from "firebase";
import Swiper from "react-native-web-swiper";
import { Audio } from "expo-av";
import { NavigationActions } from "react-navigation";

//import SoundPlayer from "react-native-sound-player";

class Game extends React.Component {
  constructor(props) {
    super(props);
   
  }

  Number = () => {
    this.props.navigation.navigate("numberGame");
   
  };
  Animal = () =>{
    this.props.navigation.navigate('animalGame')
  }
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("../assets/logo/play2.jpg")}
          
          style={styles.slideContainer}
        >
          <Image
                style={styles.image1}
                source={require("../assets/logo/ask.jpg")}
              />
          <TouchableHighlight
            style={{
              height: 40,
              width: 300,
              borderRadius: 10,
              backgroundColor: "yellow",
              marginLeft: 50,
              marginRight: 50,
              marginTop: 30,
            
              justifyContent: "center",
            }}
          >
            <Button 
            onPress={this.Number}
            title="Тоогоо бодоцгооё" />
          </TouchableHighlight>
          <TouchableHighlight
            style={{
              height: 40,
              width: 300,
              borderRadius: 10,
              backgroundColor: "yellow",
              marginLeft: 50,
              marginRight: 50,
              marginTop: 20,
              justifyContent: "center",
            }}
          >
            <Button title="Хараад сонгоорой"
             onPress={this.Animal}/>
          </TouchableHighlight>
          <TouchableHighlight
            style={{
              height: 40,
              width: 300,
              borderRadius: 10,
              backgroundColor: "yellow",
              marginLeft: 50,
              marginRight: 50,
              marginTop: 20,
              justifyContent: "center",
            }}
          >
            <Button title="Сонсоод сонгоорой"/>
          </TouchableHighlight>
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
  image1:{
    width:100,
    height:100,
    marginTop: 50,
    borderRadius: 60,
  }
});

export default Game;
