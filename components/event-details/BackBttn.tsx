import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Dimensions, Pressable, StyleSheet, View } from "react-native";

const BackBttn = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.root}>
      <Pressable style={styles.cont} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back-outline" size={26} style={styles.icon} />
      </Pressable>
    </View>
  );
};

export default BackBttn;
const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    height: Dimensions.get("window").height * 0.1,
    width: Dimensions.get("window").width * 0.2,
  },
  cont: {
    top: 25,
    left: -5,
    backgroundColor: "#ccc",
    opacity: 0.7,
    padding: 10,
    borderRadius: 100,
  },
  icon: {
    opacity: 1,
    color: "blue",
  },
});
