import * as React from 'react';

import {
  View,
  Text,
  StyleSheet
} from "react-native";

const styles = StyleSheet.create({
  container: {
        alignItems:'center',
        justifyContent:'center',
        flex:1
    },
     header: {
        alignSelf: 'stretch',
        alignItems: 'center',
    },
  text:{
      //flex: 1,
      justifyContent:'center',
  }
});

export default class Rest extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>YOU MUST REST</Text>
      </View>
    );
  }
}

