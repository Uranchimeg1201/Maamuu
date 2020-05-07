import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import homeStack from "./homeStack";
import AboutStack from "./AboutSlide";
import Admin from "../screens/out";

const RootDrawerNavigator = createDrawerNavigator({
  Нүүр: {
    screen: homeStack,
    navigationOptions: {
      headerStyle: {
        backgroundColor: "blue",
      },
    },
  },

  Нэвтрэх: { screen: AboutStack },
  Гарах: { screen: Admin },
});

export default createAppContainer(RootDrawerNavigator);
