import React, { useState, useEffect } from "react";
import { View, Linking } from "react-native";
import { MainStackParamList } from "../types/navigation";
import { getAuth, signOut } from "firebase/auth";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  StyleSheet,
  SectionList,
  SafeAreaView,
  Image,
  FlatList,
} from "react-native";
import {
  Layout,
  Button,
  Text,
  TopNav,
  Section,
  SectionContent,
  useTheme,
  themeColor,
} from "react-native-rapi-ui";
import { Ionicons } from "@expo/vector-icons";
import Grid from "../components/utils/Grid";

export default function ({
  route,
  navigation,
}: NativeStackScreenProps<MainStackParamList, "CurationScreen">) {
  const { isDarkmode, setTheme } = useTheme();
  const { metadata, navigationParam } = route.params;

  return (
    <Layout>
      <TopNav
        middleContent=""
        leftContent={
          <Ionicons
            name="chevron-back"
            size={20}
            color={isDarkmode ? themeColor.white100 : themeColor.dark}
          />
        }
        leftAction={() => navigation.goBack()}
      />
      <Section
        style={{
          flex: 1,
          // alignItems: "center",
          // width: 400,
          // justifyContent: "center",
        }}
      >
        <Grid
          sections={[
            {
              title: metadata.headerData.textHeader,
              horizontal: true,
              data: metadata.bodyData[0].data,
            },
          ]}
          navigationParam={navigation}
        />
      </Section>
    </Layout>
  );
}

// const SECTIONS = [
//   {
//     title: "Curation Screen",
//     horizontal: false,
//     data: [
//       {
//         key: "1",
//         text: "Item text 1",
//         uri: "https://picsum.photos/id/1/200",
//         likes: 10,
//       },

//       {
//         key: "2",
//         text: "Item text 2",
//         uri: "https://picsum.photos/id/10/200",
//         likes: 3,
//       },

//       {
//         key: "3",
//         text: "Item text 3",
//         uri: "https://picsum.photos/id/1002/200",
//         likes: 1,
//       },

//       {
//         key: "4",
//         text: "Item text 4",
//         uri: "https://picsum.photos/id/1006/200",
//         likes: 100,
//       },

//       {
//         key: "5",
//         text: "Item text 5",
//         uri: "https://picsum.photos/id/1008/200",
//         likes: 10,
//       },

//       {
//         key: "6",
//         text: "Item text 1",
//         uri: "https://picsum.photos/id/1011/200",
//       },
//       {
//         key: "7",
//         text: "Item text 2",
//         uri: "https://picsum.photos/id/1012/200",
//       },

//       {
//         key: "8",
//         text: "Item text 3",
//         uri: "https://picsum.photos/id/1013/200",
//       },
//       {
//         key: "9",
//         text: "Item text 4",
//         uri: "https://picsum.photos/id/1015/200",
//       },
//       {
//         key: "10",
//         text: "Item text 5",
//         uri: "https://picsum.photos/id/1016/200",
//       },
//       {
//         key: "11",
//         text: "Item text 1",
//         uri: "https://picsum.photos/id/1020/200",
//       },
//       {
//         key: "12",
//         text: "Item text 2",
//         uri: "https://picsum.photos/id/1024/200",
//       },

//       {
//         key: "13",
//         text: "Item text 3",
//         uri: "https://picsum.photos/id/1027/200",
//       },
//       {
//         key: "14",
//         text: "Item text 4",
//         uri: "https://picsum.photos/id/1035/200",
//       },
//     ],
//   },
// ];
