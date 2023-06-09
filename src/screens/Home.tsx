import React, { useEffect, useState } from "react";
import { View, Linking } from "react-native";
import { MainStackParamList } from "../types/navigation";
import { getAuth, signOut } from "firebase/auth";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useAuth } from "../provider/AuthProvider";
import axios from "axios";
import { DEV_MACHINE_IP, PRODUCT_ID } from "@env";

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
  const { currentUser, getToken } = useAuth();
  const [token, setToken] = useState();
  const auth = getAuth();

  useEffect(() => {
    fetchData();
  }, [currentUser, getToken]);

  // Utils
  const fetchToken = async () => {
    if (currentUser) {
      const token = await getToken();
      setToken(token);
    }
  };
  // Utils: Fetch data
  const fetchData = async () => {
    try {
      const token = await getToken();
      if (token) {
        const url = `http://${process.env.DEV_MACHINE_IP}/products/${PRODUCT_ID}`;
        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        console.log("Data:", response.data);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

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
        rightAction={() => {
          // fetchData;
        }}
      />
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* <Button text="Get JWT" onPress={() => {}} />
        <Text style={{ color: "black" }}>Token is: {token}</Text> */}
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
              navigationParam={
                // () => {
                // navigation.navigate("ProductDisplayPage");
                navigation
                // }
              }
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
    backgroundColor: "#ec764a",
    headerData: {
      key: "1",
      textHeader: "Jazz up your WFH setup",
      textsubHeader: "Items to boost WFH productivity",
      uri: "https://i.ibb.co/hBQwczp/Screenshot-2023-05-23-at-2-01-55-PM.png",
      likes: 10,
    },

    bodyData: [
      {
        title: "Curated by Ashwini",
        horizontal: true,
        data: [
          {
            key: "1",
            text: "₹ 505",
            uri: "https://i.ibb.co/kg7fkV7/Screenshot-2023-05-23-at-2-47-16-PM.png",
            likes: 10,
          },
          {
            key: "2",
            text: "₹ 150",
            uri: "https://i.ibb.co/hBDCYH7/Screenshot-2023-05-22-at-1-32-42-PM.png",
            likes: 3,
          },

          {
            key: "3",
            text: "₹ 250",
            uri: "https://i.ibb.co/5ngKVdL/Screenshot-2023-05-22-at-1-45-08-PM.png",
            likes: 1,
          },
          {
            key: "4",
            text: "₹ 507",
            uri: "https://i.ibb.co/zGH9DpQ/Screenshot-2023-05-22-at-2-02-16-PM.png",
            likes: 100,
          },
          {
            key: "5",
            text: "₹ 501",
            uri: "https://i.ibb.co/gzTtVDB/Screenshot-2023-05-22-at-2-04-20-PM.png",
            likes: 10,
          },
          {
            key: "6",
            text: "₹ 150",
            uri: "https://i.ibb.co/GHLgKCM/Screenshot-2023-05-22-at-2-27-35-PM.png",
            likes: 10,
          },
        ],
      },
    ],
  },
  {
    //Item
    backgroundColor: "#ecd7a2",
    headerData: {
      key: "1",
      textHeader: "All the Rajni fans..",
      textsubHeader: `Don't miss the chance..`,

      uri: "https://i.ibb.co/PYWv3W7/Screenshot-2023-05-23-at-2-58-11-PM.png",
      likes: 10,
    },

    bodyData: [
      {
        title: "Curated by Ashwin and Dhruv",
        horizontal: true,
        data: [
          {
            key: "1",
            text: "₹ 200",
            uri: "https://i.ibb.co/DCSw4dJ/Screenshot-2023-05-23-at-2-36-57-PM.png",
            likes: 10,
          },
          {
            key: "2",
            text: "₹ 200",
            uri: "https://i.ibb.co/CKNVjN4/Screenshot-2023-05-23-at-2-37-13-PM.png",
            likes: 3,
          },

          {
            key: "3",
            text: "₹ 200",
            uri: "https://i.ibb.co/7pLZvPw/Screenshot-2023-05-23-at-2-37-23-PM.png",
            likes: 1,
          },
          {
            key: "4",
            text: "₹ 200",
            uri: "https://i.ibb.co/QKyJBDs/Screenshot-2023-05-23-at-2-37-32-PM.png",
            likes: 100,
          },
          {
            key: "5",
            text: "₹ 200",
            uri: "https://i.ibb.co/tKB9dGJ/Screenshot-2023-05-23-at-12-54-22-PM.png",
            likes: 10,
          },
        ],
      },
    ],
  },
  {
    backgroundColor: "#ecdd55",
    headerData: {
      key: "1",
      textHeader: "Entrepreneurship 101",
      textsubHeader: "Books that will inspire you to start up",
      uri: "https://i.ibb.co/yYn0RMC/Screenshot-2023-05-23-at-2-58-48-PM.png",
      likes: 10,
    },

    bodyData: [
      {
        title: "Curated by Inakshi",
        horizontal: true,
        data: [
          {
            key: "1",
            text: "₹ 200",
            uri: "https://i.ibb.co/2gJfKPV/1000018696-a6d46b2cdc57c449d8d9d2488c1f4277-20-5-2023-5-31-35-pm.jpg",
            likes: 10,
          },
          {
            key: "2",
            text: "₹ 300",
            uri: "https://i.ibb.co/PctTkqw/1000018697-888dcea2ec69849915e84af69d2d7c6d-20-5-2023-5-36-42-pm.jpg",
            likes: 3,
          },

          {
            key: "3",
            text: "₹ 400",
            uri: "https://i.ibb.co/6nFkkmj/1000018698-5213d4f1a01ed35c132032bdb4d4b897-20-5-2023-5-39-46-pm.jpg",
            likes: 1,
          },
          {
            key: "4",
            text: "₹ 99",
            uri: "https://i.ibb.co/874yybw/1000018700-62a0ba9d42de71f59808c4546508569b-20-5-2023-5-43-28-pm.jpg",
            likes: 100,
          },
          {
            key: "5",
            text: "₹ 50",
            uri: "https://i.ibb.co/16zXcYL/1000018701-cba59a7070b990e2c3a17dd054daabca-20-5-2023-5-44-21-pm.jpg",
            likes: 10,
          },
        ],
      },
    ],
  },
];
