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
import { Layout, Text, themeColor, useTheme } from "react-native-rapi-ui";
import { MainStackParamList } from "../types/navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Tile from "./Tile";

export default ({
  sections,
  handleProductTilePress,
}: {
  sections: any[];
  handleProductTilePress: any;
}) => {
  const { theme, isDarkmode } = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    sectionHeader: {
      fontWeight: "700",
      fontSize: 16,
      color: isDarkmode ? themeColor.white100 : themeColor.dark,
      marginTop: 5,
      marginBottom: 5,
      left: 5,
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
      marginTop: 0,
    },
  });

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <SafeAreaView
        style={{
          flex: 1,
          // backgroundColor: isDarkmode ? themeColor.dark : themeColor.white100,
        }}
      >
        <SectionList
          contentContainerStyle={{
            paddingHorizontal: 10,
          }}
          stickySectionHeadersEnabled={false}
          sections={sections}
          renderSectionHeader={({ section }) => (
            <>
              <Text style={styles.sectionHeader}>{section.title}</Text>
              {section.horizontal ? (
                <FlatList
                  horizontal
                  data={section.data}
                  renderItem={({ item }) => (
                    <Tile item={item} handlePress={handleProductTilePress} />
                  )}
                  showsHorizontalScrollIndicator={false}
                />
              ) : null}
            </>
          )}
          renderItem={({ item, section }) => {
            if (section.horizontal) {
              return null;
            }
            return <Tile item={item} handlePress={handleProductTilePress} />;
          }}
        />
      </SafeAreaView>
    </View>
  );
};

// const SECTIONS = [
//   {
//     title: "Curated by Ashwin and Dhruv",
//     horizontal: true,
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
//     ],
//   },
//   // {
//   //   title: "Books Recommendations",
//   //   horizontal: true,
//   //   data: [
//   //     {
//   //       key: "1",
//   //       text: "Item text 1",
//   //       uri: "https://picsum.photos/id/1/200",
//   //       likes: 10,
//   //     },
//   //     {
//   //       key: "2",
//   //       text: "Item text 2",
//   //       uri: "https://picsum.photos/id/10/200",
//   //       likes: 3,
//   //     },

//   //     {
//   //       key: "3",
//   //       text: "Item text 3",
//   //       uri: "https://picsum.photos/id/1002/200",
//   //       likes: 1,
//   //     },
//   //     {
//   //       key: "4",
//   //       text: "Item text 4",
//   //       uri: "https://picsum.photos/id/1006/200",
//   //       likes: 100,
//   //     },
//   //     {
//   //       key: "5",
//   //       text: "Item text 5",
//   //       uri: "https://picsum.photos/id/1008/200",
//   //       likes: 10,
//   //     },
//   //   ],
//   // },
//   // {
//   //   title: "Punk and hardcore",
//   //   data: [
//   //     {
//   //       key: "1",
//   //       text: "Item text 1",
//   //       uri: "https://picsum.photos/id/1011/200",
//   //     },
//   //     {
//   //       key: "2",
//   //       text: "Item text 2",
//   //       uri: "https://picsum.photos/id/1012/200",
//   //     },

//   //     {
//   //       key: "3",
//   //       text: "Item text 3",
//   //       uri: "https://picsum.photos/id/1013/200",
//   //     },
//   //     {
//   //       key: "4",
//   //       text: "Item text 4",
//   //       uri: "https://picsum.photos/id/1015/200",
//   //     },
//   //     {
//   //       key: "5",
//   //       text: "Item text 5",
//   //       uri: "https://picsum.photos/id/1016/200",
//   //     },
//   //   ],
//   // },
//   // {
//   //   title: "Based on your recent listening",
//   //   data: [
//   //     {
//   //       key: "1",
//   //       text: "Item text 1",
//   //       uri: "https://picsum.photos/id/1020/200",
//   //     },
//   //     {
//   //       key: "2",
//   //       text: "Item text 2",
//   //       uri: "https://picsum.photos/id/1024/200",
//   //     },

//   //     {
//   //       key: "3",
//   //       text: "Item text 3",
//   //       uri: "https://picsum.photos/id/1027/200",
//   //     },
//   //     {
//   //       key: "4",
//   //       text: "Item text 4",
//   //       uri: "https://picsum.photos/id/1035/200",
//   //     },
//   //     {
//   //       key: "5",
//   //       text: "Item text 5",
//   //       uri: "https://picsum.photos/id/1038/200",
//   //     },
//   //   ],
//   // },
// ];
