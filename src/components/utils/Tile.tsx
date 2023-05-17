import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  SectionList,
  SafeAreaView,
  Image,
  FlatList,
} from "react-native";
import { Text, themeColor, useTheme } from "react-native-rapi-ui";
export default ({ item }: { item: any[] }) => {
  const { isDarkmode } = useTheme();
  return (
    <View style={styles.item}>
      <Image
        source={{
          uri: item.uri,
          //   uri: "https://reactnative.dev/img/tiny_logo.png",
        }}
        style={styles.itemPhoto}
        resizeMode="cover"
      />
      <Text style={styles.itemText}>{item.text}</Text>
    </View>
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
    margin: 10,
  },
  itemPhoto: {
    width: 200,
    height: 200,
  },
  itemText: {
    color: "rgba(255, 255, 255, 0.5)",
    marginTop: 5,
  },
});
