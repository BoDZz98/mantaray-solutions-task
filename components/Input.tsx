import React from "react";
import {
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
} from "react-native";

type InputProps = {
  label: string;
  textInputConfig: TextInputProps;
  hasError: boolean;
  errorMessage: string;
};

const Input = ({
  label,
  textInputConfig,
  hasError,
  errorMessage,
}: InputProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        {...textInputConfig}
        style={[styles.input, hasError && styles.descErrorStyle]}
      />
      {hasError && <Text style={styles.errorText}>{errorMessage}</Text>}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingVertical: 13,
  },
  label: {
    color: "grey",
    fontSize: 12,
    marginBottom: 4,
  },
  input: {
    backgroundColor: "#f2f2f2",
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
    color: "grey",
  },
  descErrorStyle: {
    backgroundColor: "pink",
  },
  errorText: {
    color: "red",
    fontSize: 10,
    position: "absolute",
    bottom: -2,
  },
});
