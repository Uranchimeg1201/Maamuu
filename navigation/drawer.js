import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import homeStack from "./homeStack";
import AboutStack from "./AboutSlide";
import Out from "../screens/out";

const RootDrawerNavigator = createDrawerNavigator({
  Home: { screen: homeStack },
  About: { screen: AboutStack },
});

export default createAppContainer(RootDrawerNavigator);
