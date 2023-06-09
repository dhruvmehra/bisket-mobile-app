import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  SectionList,
  SafeAreaView,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Layout, Text, themeColor, useTheme } from "react-native-rapi-ui";
import { MainStackParamList } from "../types/navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Carousell from "./utils/Carousell";
import SpotlightTile from "./utils/SpotlightTile";

export default ({
  data,
  onSpotlightPress,
  navigationParam,
}: {
  data: any[];
  onSpotlightPress: any;
  navigationParam: any;
}) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          width: 420,
          backgroundColor: data.backgroundColor,
          alignItems: "center",
        }}
      >
        <View style={{ width: 390 }}>
          <SpotlightTile
            style={styles.spotLightTile}
            item={data.headerData}
            handlePress={onSpotlightPress}
          />
          <Carousell
            sections={data.bodyData}
            navigationParam={navigationParam}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    marginBottom: 20,
  },
  spotLightTile: {
    backgroundColor: "black",
  },
});
