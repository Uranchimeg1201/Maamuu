import React from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function Header({ navigation }) {
  const OpenMenu = () => {
    navigation.openDrawer();
  };

  return (
    
    <View style={styles.header}>
      <ImageBackground 
       source={require("../assets/logo/back2.png")}
       resizeMode="stretch"
       style={styles.container}
     >
        {/* onPress darwal OpenMenu duudagdana */}
      <AntDesign name="bars" size={28} onPress={OpenMenu} style={styles.ikon} />
     
        <View>
          <Image
            style={styles.image}
            resource={require("../assets/logo/kids2.png")}
          />
        </View>
      
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: 410,
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#D6EAF8",
  },
 
  ikon: {
    position:'absolute',
    marginLeft:-40,
  },
  container:{
    height:'100%',
    width:'70%',
    marginRight: -30,
    justifyContent:'center'
  }

});
