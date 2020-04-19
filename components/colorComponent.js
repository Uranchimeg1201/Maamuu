import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Icon,
  Image,
  ImageBackground,
  Button,
  Card,
  TouchableHighlight,
} from "react-native";
import Swiper from "react-native-web-swiper";
//import SoundPlayer from "react-native-sound-player";

class Component extends React.Component {
  render() {

    return (
      <View style={styles.container}>
        
          
            <View style={[styles.slideContainer, styles.slide1]}>
              <TouchableHighlight
                style={{
                  height: 200,
                  width: 200,
                  borderRadius: 10,
                  backgroundColor: "yellow",
                  marginLeft: 50,
                  marginRight: 50,
                  marginTop: 20,
                  justifyContent: "center",
                }}
              >
                <Button title="Шар" />
              </TouchableHighlight>
            </View>
            <View style={[styles.slideContainer, styles.slide1]}>
              <TouchableHighlight
                style={{
                  height: 200,
                  width: 200,
                  borderRadius: 10,
                  backgroundColor: "green",
                  marginLeft: 50,
                  marginRight: 50,
                  marginTop: 20,
                  justifyContent: "center",
                }}
              >
                <Button title="Ногоон" color = 'white' />
              </TouchableHighlight>
            </View>
            <View style={[styles.slideContainer, styles.slide1]}>
              <TouchableHighlight
                style={{
                  height: 200,
                  width: 200,
                  borderRadius: 10,
                  backgroundColor: "blue",
                  marginLeft: 50,
                  marginRight: 50,
                  marginTop: 20,
                  justifyContent: "center",
                }}
              >
                <Button title="Цэнхэр" color = 'white' />
              </TouchableHighlight>
            </View>
            <View style={[styles.slideContainer, styles.slide1]}>
              <TouchableHighlight
                style={{
                  height: 200,
                  width: 200,
                  borderRadius: 10,
                  backgroundColor: "red",
                  marginLeft: 50,
                  marginRight: 50,
                  marginTop: 20,
                  justifyContent: "center",
                }}
              >
                <Button title="Улаан" color = 'white' />
              </TouchableHighlight>
            </View>
            <View style={[styles.slideContainer, styles.slide1]}>
              <TouchableHighlight
                style={{
                  height: 200,
                  width: 200,
                  borderRadius: 10,
                  backgroundColor: "pink",
                  marginLeft: 50,
                  marginRight: 50,
                  marginTop: 20,
                  justifyContent: "center",
                }}
              >
                <Button title="Яагаан" color = 'white' />
              </TouchableHighlight>
            </View>
            <View style={[styles.slideContainer, styles.slide1]}>
              <TouchableHighlight
                style={{
                  height: 200,
                  width: 200,
                  borderRadius: 10,
                  backgroundColor: "white",
                  marginLeft: 50,
                  marginRight: 50,
                  marginTop: 20,
                  justifyContent: "center",
                  borderWidth: 1,

                }}
              >
                <Button title="Цагаан" color = 'black' />
              </TouchableHighlight>
            </View>
            <View style={[styles.slideContainer, styles.slide1]}>
              <TouchableHighlight
                style={{
                  height: 200,
                  width: 200,
                  borderRadius: 10,
                  backgroundColor: "black",
                  marginLeft: 50,
                  marginRight: 50,
                  marginTop: 20,
                  justifyContent: "center",
                  
                  
                }}
              >
                <Button title="Хар" color = 'white' />
              </TouchableHighlight>
            </View>
            <View style={[styles.slideContainer, styles.slide1]}>
              <TouchableHighlight
                style={{
                  height: 200,
                  width: 200,
                  borderRadius: 10,
                  backgroundColor: "black",
                  marginLeft: 50,
                  marginRight: 50,
                  marginTop: 20,
                  justifyContent: "center",
                  
                  
                }}
              >
                <Button title="Хар" color = 'white' />
              </TouchableHighlight>
            </View>
            <View style={[styles.slideContainer, styles.slide1]}>
              <TouchableHighlight
                style={{
                  height: 200,
                  width: 200,
                  borderRadius: 10,
                  backgroundColor: "brown",
                  marginLeft: 50,
                  marginRight: 50,
                  marginTop: 20,
                  justifyContent: "center",
                  borderWidth: 1,
                  
                }}
              >
                <Button title="Бор" color = 'white' />
              </TouchableHighlight>
            </View>
            
            <View style={[styles.slideContainer, styles.slide1]}>
              <TouchableHighlight
                style={{
                  height: 200,
                  width: 200,
                  borderRadius: 10,
                  backgroundColor: "brown",
                  marginLeft: 50,
                  marginRight: 50,
                  marginTop: 20,
                  justifyContent: "center",
                  borderWidth: 1,
                  
                }}
              >
                <Button title="Бор" color = 'white' />
              </TouchableHighlight>
            </View>
            
       
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

export default Component;
