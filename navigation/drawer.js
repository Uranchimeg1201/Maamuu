import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import homeStack from "./homeStack";
import AboutStack from "./AboutSlide";
import Admin from "../screens/out";
import { Image, StyleSheet, View } from "react-native";
import menuBar from "../components/menuBar";
//import { Container, Body, Header } from "native-base";



// const Drawer =(props) =>{
//   <Container>
//     <Header>
//       <Body>
//       <Image
//               style={styles.image}
//               source={require("../assets/logo/kids2.png")}
//             />
//       </Body>
//     </Header>
//   </Container>
// }

const RootDrawerNavigator = createDrawerNavigator({
  Нүүр: {
    screen: homeStack,
    navigationOptions: {
      headerLeft: () => <menuBar />,
      headerStyle: {
        backgroundColor: "red",
      },    
    },
  },

  Нэвтрэх: {
    screen: AboutStack,
    navigationOptions: {
      title: "Нэвтрэх",
    },
  },
  Гарах: { screen: Admin },
});

export default createAppContainer(RootDrawerNavigator);
