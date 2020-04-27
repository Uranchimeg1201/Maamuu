import React from "react";
import { StyleSheet, Text, View, Dimensions ,ImageBackground } from "react-native";
import { Video } from "expo-av";




export default function Video2() {
  return (
    <View style={styles.container}>
        <ImageBackground 
         source = {require('../assets/logo/kids2.png')}
         resizeMode='repeat'
         style={styles.back}
         >
      <Video
  source={{ uri:'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'}}
  rate={1.0}
  volume={1.0}
  isMuted={false}
  resizeMode="cover"
  shouldPlay
  isLooping
  style={{ width: 300, height: 300 }}
/>
</ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  video: {
    width: 300,
    height: 300,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent:'center',
    alignItems: "center",
  },
  back:{
      width:'100%',
      height:'100%',
      justifyContent:'center',
      alignItems:'center',
  }
});
