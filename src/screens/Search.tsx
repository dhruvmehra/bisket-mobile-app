import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { MainStackParamList } from "../types/navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Layout, Text } from "react-native-rapi-ui";
import { SearchBar } from "react-native-elements";
import TwoRowsCarousell from "../components/utils/TwoRowsCarousell";

export default function ({
  navigation,
}: NativeStackScreenProps<MainStackParamList, "MainTabs">) {
  const [search, setSearch] = useState("");
  return (
    <Layout>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <SearchBar
          inputStyle={{ backgroundColor: "white" }}
          containerStyle={{
            backgroundColor: "white",
            borderWidth: 1,
            borderRadius: 5,
            width: 400,
            height: 50,
            marginTop: 10,
            marginBottom: 10,
          }}
          inputContainerStyle={{
            marginTop: 2,
            marginBottom: 2,
            height: "80%",
            backgroundColor: "white",
          }}
          placeholder="Type Here..."
        />
        <TwoRowsCarousell sections={SECTIONS} />
      </View>
    </Layout>
  );
}

const SECTIONS = [
  {
    title: "Trending",
    horizontal: true,
    data: [
      {
        key: "1",
        text: "Item text 1",
        uri: "https://picsum.photos/id/1/200",
        likes: 10,
      },

      {
        key: "2",
        text: "Item text 2",
        uri: "https://picsum.photos/id/10/200",
        likes: 3,
      },

      {
        key: "3",
        text: "Item text 3",
        uri: "https://picsum.photos/id/1002/200",
        likes: 1,
      },

      {
        key: "4",
        text: "Item text 4",
        uri: "https://picsum.photos/id/1006/200",
        likes: 100,
      },

      {
        key: "5",
        text: "Item text 5",
        uri: "https://picsum.photos/id/1008/200",
        likes: 10,
      },

      {
        key: "6",
        text: "Item text 1",
        uri: "https://picsum.photos/id/1011/200",
      },
      {
        key: "7",
        text: "Item text 2",
        uri: "https://picsum.photos/id/1012/200",
      },

      {
        key: "8",
        text: "Item text 3",
        uri: "https://picsum.photos/id/1013/200",
      },
      {
        key: "9",
        text: "Item text 4",
        uri: "https://picsum.photos/id/1015/200",
      },
      {
        key: "10",
        text: "Item text 5",
        uri: "https://picsum.photos/id/1016/200",
      },
      {
        key: "11",
        text: "Item text 1",
        uri: "https://picsum.photos/id/1020/200",
      },
      {
        key: "12",
        text: "Item text 2",
        uri: "https://picsum.photos/id/1024/200",
      },

      {
        key: "13",
        text: "Item text 3",
        uri: "https://picsum.photos/id/1027/200",
      },
      {
        key: "14",
        text: "Item text 4",
        uri: "https://picsum.photos/id/1035/200",
      },
    ],
  },
  {
    title: "Top categories",
    horizontal: true,
    data: [
      {
        key: "1",
        text: "Item text 1",
        uri: "https://picsum.photos/id/1011/200",
      },
      {
        key: "2",
        text: "Item text 2",
        uri: "https://picsum.photos/id/1012/200",
      },

      {
        key: "3",
        text: "Item text 3",
        uri: "https://picsum.photos/id/1013/200",
      },
      {
        key: "4",
        text: "Item text 4",
        uri: "https://picsum.photos/id/1015/200",
      },
      {
        key: "5",
        text: "Item text 5",
        uri: "https://picsum.photos/id/1016/200",
      },
    ],
  },
];
