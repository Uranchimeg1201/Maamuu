import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Button,
  View,
  ShadowPropTypesIOS,
} from "react-native";
import {createAppContainer}  from 'react-navigation';
//  App-c props -оор нэрнүүд нь ирж байгаа

export default function Handler({ item, navigation }) {
  const onPressHandler = () => {
    navigation.push('Animal');
  };

  return (
    <TouchableOpacity onPress={onPressHandler}>
      <Text style={styles.item} >
        {item.name}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    marginHorizontal: 40,
    marginTop: 160,
    padding: 0,
    // backgroundColor: "rgb(200, 255, 255 )",
    fontSize: 24,
    fontWeight: "bold",
    borderColor: "rgb(0,153,0)",
    borderWidth: 2,
    borderStyle: "dashed",
    borderRadius: 10,
    borderEndWidth: 10,
  },
});
