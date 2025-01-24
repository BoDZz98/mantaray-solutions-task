import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

type MyBttnProps = {
  onPress: () => void;
  text: string;
  bttnStyle: StyleProp<ViewStyle>;
  icon?: React.ReactNode;
};

const MyBttn = ({ text, bttnStyle, icon, onPress }: MyBttnProps) => {
  return (
    <TouchableOpacity style={[styles.button, bttnStyle]} onPress={onPress}>
      {/* <Ionicons name="log-out" size={20} color="white" /> */}
      {icon}
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default MyBttn;

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderRadius: 5,
  },

  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
