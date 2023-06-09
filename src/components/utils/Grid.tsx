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
import BigTile from "./BigTile";

export default ({
  sections,
  navigationParam,
}: {
  sections: any[];
  navigationParam: any;
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
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: isDarkmode ? themeColor.dark : themeColor.white100,
        }}
      >
        <SectionList
          contentContainerStyle={{ width: 400, paddingHorizontal: 10 }}
          stickySectionHeadersEnabled={false}
          sections={sections}
          renderSectionHeader={({ section }) => (
            <>
              <Text style={styles.sectionHeader}>{section.title}</Text>
              {section.horizontal ? (
                <FlatList
                  data={section.data}
                  numColumns={2}
                  renderItem={({ item }) => (
                    <BigTile item={item} navigationParam={navigationParam} />
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
            return <BigTile item={item} navigationParam={navigationParam} />;
          }}
        />
      </SafeAreaView>
    </View>
  );
};
