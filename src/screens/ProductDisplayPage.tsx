import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { MainStackParamList } from "../types/navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Layout, Text } from "react-native-rapi-ui";
// import { SearchBar } from "react-native-elements";
import Grid from "../components/utils/Grid";

export default function ({
  navigation,
}: NativeStackScreenProps<MainStackParamList, "ProductDisplayPage">) {
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
        <Text>This is Product screen</Text>
      </View>
    </Layout>
  );
}
