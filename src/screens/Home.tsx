import React from "react";
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
import Curation from "../components/Curation";

export default function ({
  navigation,
}: NativeStackScreenProps<MainStackParamList, "MainTabs">) {
  const { isDarkmode, setTheme } = useTheme();
  const auth = getAuth();

  return (
    <Layout>
      <TopNav
        middleContent="Bisket"
        middleTextStyle={styles.headerText}
        rightContent={
          <Ionicons
            name={"ios-create-outline"}
            size={30}
            color={isDarkmode ? themeColor.white100 : themeColor.dark}
          />
        }
        rightAction={() => {}}
      />
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <Curation
              data={item}
              onSpotlightPress={() => {
                navigation.navigate("CurationScreen", {
                  metadata: item,
                });
              }}
              onProductTilePress={() => {
                navigation.navigate("ProductDisplayPage");
              }}
            />
          )}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },
  headerText: {
    fontWeight: "600",
    fontSize: 36,
    marginTop: 5,
    marginBottom: 5,
  },
});

const data = [
  {
    backgroundColor: "red",
    headerData: {
      key: "1",
      textHeader: "Lorem Ipsom curation",
      textsubHeader: "blah blah blah blah blah",
      uri: "https://picsum.photos/id/1/200",
      likes: 10,
    },

    bodyData: [
      {
        title: "Curated by Ashwin and Dhruv",
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
            text: "Item text 6",
            uri: "https://picsum.photos/id/1/200",
            likes: 10,
          },
        ],
      },
    ],
  },
  {
    backgroundColor: "yellow",
    headerData: {
      key: "1",
      textHeader: "Hello world curation",
      textsubHeader: "Item text 1",
      uri: "https://picsum.photos/id/10/200",
      likes: 10,
    },

    bodyData: [
      {
        title: "Curated by Inakshi",
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
        ],
      },
    ],
  },
  {
    backgroundColor: "pink",
    headerData: {
      key: "1",
      textHeader: "Lorem Ipsom",
      textsubHeader: "Item text 1",
      uri: "https://picsum.photos/id/1002/200",
      likes: 10,
    },

    bodyData: [
      {
        title: "Curated by Ashwini",
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
        ],
      },
    ],
  },
];
