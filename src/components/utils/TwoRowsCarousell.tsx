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
  navigation,
}: {
  sections: any[];
  navigation: any;
}) => {
  const { isDarkmode } = useTheme();
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#121212",
    },
    sectionHeader: {
      fontWeight: "800",
      fontSize: 18,
      color: isDarkmode ? themeColor.white100 : themeColor.dark,
      marginTop: 20,
      marginBottom: 5,
    },
    item: {
      margin: 10,
    },
  });

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: isDarkmode ? themeColor.dark : themeColor.white100,
        }}
      >
        <SectionList
          contentContainerStyle={{ paddingHorizontal: 10 }}
          stickySectionHeadersEnabled={false}
          sections={sections}
          renderSectionHeader={({ section }) => (
            <>
              <Text style={styles.sectionHeader}>{section.title}</Text>
              {section.horizontal ? (
                <FlatList
                  horizontal
                  data={section.data}
                  // numColumns={Math.ceil(section.data.length / 2)}
                  renderItem={({ item }) => (
                    <View>
                      <Tile item={item[0]} navigationParam={navigation} />
                      <Tile item={item[1]} navigationParam={navigation} />
                    </View>
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
            return (
              <View>
                <Tile item={item[0]} navigationParam={navigation} />
                <Tile item={item[1]} navigationParam={navigation} />
              </View>
            );
          }}
        />
      </SafeAreaView>
    </View>
  );
};
