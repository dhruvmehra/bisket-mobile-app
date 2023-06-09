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
        <TwoRowsCarousell sections={SECTIONS} navigation={navigation} />
      </View>
    </Layout>
  );
}

const SECTIONS = [
  {
    title: "Trending",
    horizontal: true,
    data: [
      [
        {
          key: "1",
          text: "₹ 500",
          uri: "https://i.ibb.co/kg7fkV7/Screenshot-2023-05-23-at-2-47-16-PM.png",
          likes: 10,
        },
        {
          key: "1",
          text: "₹ 200",
          uri: "https://i.ibb.co/DCSw4dJ/Screenshot-2023-05-23-at-2-36-57-PM.png",
          likes: 10,
        },
      ],

      [
        {
          key: "2",
          text: "₹ 500",
          uri: "https://i.ibb.co/CKNVjN4/Screenshot-2023-05-23-at-2-37-13-PM.png",
          likes: 3,
        },
        {
          key: "2",
          text: "₹ 500",
          uri: "https://i.ibb.co/2gJfKPV/1000018696-a6d46b2cdc57c449d8d9d2488c1f4277-20-5-2023-5-31-35-pm.jpg",
          likes: 3,
        },
      ],

      [
        {
          key: "3A",
          text: "₹ 500",
          uri: "https://i.ibb.co/6nFkkmj/1000018698-5213d4f1a01ed35c132032bdb4d4b897-20-5-2023-5-39-46-pm.jpg",
          likes: 1,
        },
        {
          key: "3B",
          text: "₹ 500",
          uri: "https://i.ibb.co/874yybw/1000018700-62a0ba9d42de71f59808c4546508569b-20-5-2023-5-43-28-pm.jpg",
          likes: 1,
        },
      ],

      [
        {
          key: "4A",
          text: "₹ 500",
          uri: "https://i.ibb.co/PctTkqw/1000018697-888dcea2ec69849915e84af69d2d7c6d-20-5-2023-5-36-42-pm.jpg",
          likes: 100,
        },
        {
          key: "4B",
          text: "₹ 50",
          uri: "https://i.ibb.co/tKB9dGJ/Screenshot-2023-05-23-at-12-54-22-PM.png",
          likes: 100,
        },
      ],

      [
        {
          key: "5A",
          text: "₹ 50",
          uri: "https://i.ibb.co/2gJfKPV/1000018696-a6d46b2cdc57c449d8d9d2488c1f4277-20-5-2023-5-31-35-pm.jpg",
          likes: 10,
        },
        {
          key: "5B",
          text: "₹ 190",
          uri: "https://i.ibb.co/hBDCYH7/Screenshot-2023-05-22-at-1-32-42-PM.png",
          likes: 10,
        },
      ],

      // {
      //   key: "8",
      //   text: "Item text 3",
      //   uri: "https://picsum.photos/id/1013/200",
      // },
      // {
      //   key: "9",
      //   text: "Item text 4",
      //   uri: "https://picsum.photos/id/1015/200",
      // },
      // {
      //   key: "10",
      //   text: "Item text 5",
      //   uri: "https://picsum.photos/id/1016/200",
      // },
      // {
      //   key: "11",
      //   text: "Item text 1",
      //   uri: "https://picsum.photos/id/1020/200",
      // },
      // {
      //   key: "12",
      //   text: "Item text 2",
      //   uri: "https://picsum.photos/id/1024/200",
      // },

      // {
      //   key: "13",
      //   text: "Item text 3",
      //   uri: "https://picsum.photos/id/1027/200",
      // },
      // {
      //   key: "14",
      //   text: "Item text 4",
      //   uri: "https://picsum.photos/id/1035/200",
      // },
    ],
  },
  {
    title: "Top categories",
    horizontal: true,
    // data: [
    //   {
    //     key: "1",
    //     text: "Item text 1",
    //     uri: "https://picsum.photos/id/1011/200",
    //   },
    //   {
    //     key: "2",
    //     text: "Item text 2",
    //     uri: "https://picsum.photos/id/1012/200",
    //   },

    //   {
    //     key: "3",
    //     text: "Item text 3",
    //     uri: "https://picsum.photos/id/1013/200",
    //   },
    //   {
    //     key: "4",
    //     text: "Item text 4",
    //     uri: "https://picsum.photos/id/1015/200",
    //   },
    //   {
    //     key: "5",
    //     text: "Item text 5",
    //     uri: "https://picsum.photos/id/1016/200",
    //   },
    // ],
    data: [
      [
        {
          key: "1",
          text: "WFH",
          uri: "https://picsum.photos/id/1/200",
          likes: 10,
        },
        {
          key: "1",
          text: "Travel",
          uri: "https://picsum.photos/id/10/200",
          likes: 10,
        },
      ],

      [
        {
          key: "2",
          text: "Books",

          uri: "https://i.ibb.co/vVhL7pC/Screenshot-2023-05-23-at-3-10-42-PM.png",
          likes: 3,
        },
        {
          key: "2",
          text: "Posters",
          uri: "https://i.ibb.co/XZb5LN3/Screenshot-2023-05-23-at-2-37-06-PM.png",
          likes: 3,
        },
      ],

      [
        {
          key: "3A",
          text: "Home Decor",
          uri: "https://i.ibb.co/hBDCYH7/Screenshot-2023-05-22-at-1-32-42-PM.png",
          likes: 1,
        },
        {
          key: "3B",
          text: "Startup 101",
          uri: "https://i.ibb.co/yYn0RMC/Screenshot-2023-05-23-at-2-58-48-PM.png",
          likes: 1,
        },
      ],

      // {
      //   key: "8",
      //   text: "Item text 3",
      //   uri: "https://picsum.photos/id/1013/200",
      // },
      // {
      //   key: "9",
      //   text: "Item text 4",
      //   uri: "https://picsum.photos/id/1015/200",
      // },
      // {
      //   key: "10",
      //   text: "Item text 5",
      //   uri: "https://picsum.photos/id/1016/200",
      // },
      // {
      //   key: "11",
      //   text: "Item text 1",
      //   uri: "https://picsum.photos/id/1020/200",
      // },
      // {
      //   key: "12",
      //   text: "Item text 2",
      //   uri: "https://picsum.photos/id/1024/200",
      // },

      // {
      //   key: "13",
      //   text: "Item text 3",
      //   uri: "https://picsum.photos/id/1027/200",
      // },
      // {
      //   key: "14",
      //   text: "Item text 4",
      //   uri: "https://picsum.photos/id/1035/200",
      // },
    ],
  },
];
