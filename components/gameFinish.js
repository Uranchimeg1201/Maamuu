import React from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  ImageBackground,
  Button,
  TouchableHighlight,
} from "react-native";
import { NavigationActions } from "react-navigation";

class Finish extends React.Component {
  constructor(props) {
    super(props);
   
  }

  Play = () => {
    this.props.navigation.navigate("listenGame");
   
  };
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("../assets/logo/finish2.jpg")}
          resizeMode="stretch"
          style={styles.container}
        >
          <Image
            style={styles.image}
            source={require("../assets/logo/good.jpg")}
          />
          <TouchableHighlight
                style={{
                  height: 50,
                  width: 130,
                  borderRadius: 10,
                  backgroundColor: "orange",
                  marginLeft: 50,
                  marginRight: 50,
                  marginTop: 20,
                  justifyContent: "center",
                }}
              >
                <Button title="Дахин тоглох" 
                   onPress={this.Play}/>
              </TouchableHighlight>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  image: {
    marginTop: 300,
    width: 250,
    height: 165,
  },
});

export default Finish;