import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SecondScreen from "../screens/SecondScreen";
import CurationScreen from "../screens/CurationScreen";
import ProductDisplayPage from "../screens/ProductDisplayPage";
import MainTabs from "./MainTabs";

const MainStack = createNativeStackNavigator();
const Main = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <MainStack.Screen name="MainTabs" component={MainTabs} />
      <MainStack.Screen name="SecondScreen" component={SecondScreen} />
      <MainStack.Screen name="CurationScreen" component={CurationScreen} />
      <MainStack.Screen
        name="ProductDisplayPage"
        component={ProductDisplayPage}
      />
    </MainStack.Navigator>
  );
};

export default Main;
