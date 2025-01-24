import AuthForm from "@/components/AuthForm";
import MyBttn from "@/components/MyBttn";
import { RootState } from "@/store";
import { userAction } from "@/store/user-slice";
import { Ionicons } from "@expo/vector-icons";

import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();

  const isAuth = useSelector((state: RootState) => state.user.isAuth);
  const logoutHandler = () => {
    dispatch(userAction.logout());
  };
  return (
    <View style={styles.root}>
      {isAuth ? (
        <MyBttn
          text="Logout"
          bttnStyle={{ backgroundColor: "red" }}
          icon={<Ionicons name="log-out" size={20} color="white" />}
          onPress={logoutHandler}
        />
      ) : (
        <AuthForm />
      )}
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  root: {
    flex: 0.8,
    paddingHorizontal: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "red",
    padding: 10,
    borderRadius: 5,
  },

  text: {
    marginLeft: 8,
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
