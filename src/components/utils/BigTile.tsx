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
import { Text, themeColor, useTheme } from "react-native-rapi-ui";

export default ({
  item,
  navigationParam,
}: {
  item: any[];
  navigationParam: any;
}) => {
  const { isDarkmode } = useTheme();
  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => {
        navigationParam.navigate("ProductDisplayPage", { metadata: item.uri });
      }}
    >
      <Image
        source={{
          uri: item.uri,
          //   uri: "https://reactnative.dev/img/tiny_logo.png",
        }}
        style={styles.itemPhoto}
        resizeMode="cover"
      />
      <Text style={styles.itemText}>{item.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },
  sectionHeader: {
    fontWeight: "800",
    fontSize: 18,
    color: "#f4f4f4",
    marginTop: 20,
    marginBottom: 5,
  },
  item: {
    margin: 3,
  },
  itemPhoto: {
    width: 190,
    height: 250,
    borderRadius: 10,
  },
  itemText: {
    color: "rgba(255, 255, 255, 1)",
    marginTop: 5,
    position: "absolute",
    bottom: 8,
    left: 5,
  },
});
