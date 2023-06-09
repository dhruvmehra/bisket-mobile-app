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

export default ({ item, handlePress }: { item: any[]; handlePress: any }) => {
  const { isDarkmode } = useTheme();
  return (
    <TouchableOpacity style={styles.item} onPress={handlePress}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>{item.textHeader}</Text>
        <Text style={styles.subHeaderText}>{item.textsubHeader}</Text>
      </View>

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
    width: 380,
    height: 420,
    borderRadius: 10,
  },
  itemText: {
    color: "rgba(255, 255, 255, 1)",
    marginTop: 5,
    position: "absolute",
    bottom: 8,
    left: 5,
  },
  headerContainer: {
    fontWeight: "800",
    fontSize: 42,
    height: 80,
    width: 400,
    left: 5,
    marginBottom: 5,
    marginTop: 5,
  },
  headerText: {
    fontSize: 22,
    fontWeight: "800",
  },
  subHeaderText: {
    fontWeight: "400",
    fontSize: 18,
    marginTop: 5,
    marginBottom: 5,
  },
});
