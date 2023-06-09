import React, { useState, useEffect } from "react";
import { MainStackParamList } from "../types/navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import {
  StyleSheet,
  View,
  SectionList,
  SafeAreaView,
  Image,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import {
  Layout,
  Text,
  themeColor,
  useTheme,
  Button,
} from "react-native-rapi-ui";

export default function ({
  route,
  navigation,
}: NativeStackScreenProps<MainStackParamList, "ProductDisplayPage">) {
  const { isDarkmode, setTheme } = useTheme();
  const { metadata } = route.params;
  return (
    <Layout>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <ImageBackground
          source={{
            uri: metadata,
            // uri: "https://picsum.photos/id/10/200",
          }}
          style={styles.itemPhoto}
          resizeMode="cover"
        >
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Ionicons
              name="chevron-back"
              size={30}
              color={isDarkmode ? themeColor.white100 : themeColor.dark}
            />
          </TouchableOpacity>
        </ImageBackground>
        <View style={styles.itemTextContainer}>
          <Text style={styles.itemText}>Product1</Text>
          <Text style={styles.itemPrice}>$100</Text>

          <Text style={styles.itemDescriptionText}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
            tempore iure? Consectetur fuga maiores aperiam esse ea voluptatum
          </Text>
          <Button text="Buy from Amazon" style={styles.buyButton} />
        </View>
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },
  backButton: {
    position: "absolute",
    top: 20,
    left: 30,
  },
  item: {
    margin: 3,
  },
  itemPhoto: {
    top: 5,
    flex: 1,
    // position: "absolute",
    width: 450,
    height: 350,
    borderRadius: 3,
  },
  itemTextContainer: { flex: 1, width: 370, rowGap: 5 },
  itemText: {
    color: "black",
    padding: 5,
    fontSize: 32,
    fontWeight: 800,
    position: "relative",
  },
  itemPrice: {
    color: "black",
    padding: 5,
    fontSize: 18,
    fontWeight: 400,
    // position: "absolute",
  },
  itemDescriptionText: {
    color: "black",
    padding: 5,
    fontSize: 16,
    fontWeight: 100,
    // position: "absolute",
  },
  buyButton: {
    width: 200,
    color: "black",
  },
});

const data = {
  imgUrl: "",
  productHeader: "",
  produDescription: "",
  prodPrice: "",
};
