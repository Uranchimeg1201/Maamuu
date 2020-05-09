import React from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";


export default class menuBar extends React.Component {

  render(){
    return(
      <View style={{ flexDirection: 'row' }}>
        <Image
              style={styles.image}
              source={require("../assets/logo/kids2.png")}
            />
      </View>
    );
  }
}


const styles = StyleSheet.create({

  container:{
    height:'100%',
    width:'70%',
    marginRight: -30,
    justifyContent:'center'
  },
  image:{
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    marginLeft: 15,
  }

});
