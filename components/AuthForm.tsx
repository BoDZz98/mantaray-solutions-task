import Input from "@/components/Input";
import { userAction } from "@/store/user-slice";
import { getUser } from "@/utils/api-utils";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import MyBttn from "./MyBttn";

const AuthForm = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [signingUp, setSigningUp] = useState(false);
  const [userNotFoundError, setuserNotFoundError] = useState(false);

  const [inputs, setInputs] = useState({
    name: { value: "", isValid: true },
    email: { value: "", isValid: true },
    password: { value: "", isValid: true },
  });

  const changeInputHandler = (identifier: string, value: string) => {
    setInputs((prev) => {
      return {
        ...prev,
        [identifier]: { value, isValid: true },
      };
    });
  };

  const submitHandler = async () => {
    // Validation
    const nameIsValid = inputs.name.value.trim().length !== 0;
    const emailIsValid = inputs.email.value.includes("@");
    const passwordIsValid = inputs.password.value.trim().length >= 5;

    if (!emailIsValid || !passwordIsValid || (signingUp && !nameIsValid)) {
      // Inputs contain errors
      setInputs((currentValues) => {
        return {
          name: {
            value: currentValues.name.value,
            isValid: nameIsValid,
          },
          email: {
            value: currentValues.email.value,
            isValid: emailIsValid,
          },
          password: {
            value: currentValues.password.value,
            isValid: passwordIsValid,
          },
        };
      });
    } else {
      // Inputs are good
      const inputData = {
        name: inputs.name.value,
        email: inputs.email.value,
        password: inputs.password.value,
      };
      const user = await getUser(inputData, signingUp);
      if (!user) {
        setuserNotFoundError(true);
      } else {
        dispatch(userAction.setUser(user));
        // @ts-ignore
        navigation.navigate("Events");
      }
    }
  };

  //-------------------------------------------------------------------------

  return (
    <View style={styles.innerCont}>
      {userNotFoundError && (
        <Text style={styles.errorText}>User Not Found</Text>
      )}
      {signingUp && (
        <Input
          label="Name"
          hasError={!inputs.name.isValid}
          errorMessage={"Name is required"}
          textInputConfig={{
            onChangeText: changeInputHandler.bind(null, "name"),
          }}
        />
      )}
      <Input
        label="Email"
        hasError={!inputs.email.isValid}
        errorMessage={"Email must contain @ symbol"}
        textInputConfig={{
          onChangeText: changeInputHandler.bind(null, "email"),
        }}
      />
      <Input
        label="Password"
        hasError={!inputs.password.isValid}
        errorMessage={"Password is too short"}
        textInputConfig={{
          secureTextEntry: true,
          onChangeText: changeInputHandler.bind(null, "password"),
        }}
      />

      {/* <View style={styles.buttonCont}>
        <Button
          title={signingUp ? "SignUp" : "Login"}
          color="blue"
          onPress={submitHandler}
        />
      </View> */}
      <MyBttn
        text={signingUp ? "SignUp" : "Login"}
        bttnStyle={styles.buttonCont}
        onPress={submitHandler}
      />
      <View style={styles.textCont}>
        <Text style={styles.text}>
          {signingUp ? "Already registered?" : "Don't have an account"}
        </Text>

        <Pressable
          onPress={() => setSigningUp((prev) => !prev)}
          android_ripple={{ color: "#ccc" }}
        >
          <Text style={styles.text2}>{signingUp ? "Login" : "SignUp"}</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default AuthForm;

const styles = StyleSheet.create({
  errorText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "red",
    alignSelf: "center",
  },
  innerCont: {
    width: "100%",
    backgroundColor: "white",
    padding: 16,
    borderRadius: 20,
  },
  buttonCont: {
    backgroundColor: "blue",
    marginVertical: 8,
    borderRadius: 10,
    // overflow: "hidden",
  },
  textCont: {
    flexDirection: "row",
    justifyContent: "center",
  },
  text: {
    color: "grey",
    marginHorizontal: 4,
    fontSize: 13,
  },
  text2: {
    color: "#ccc",
    textDecorationLine: "underline",
  },
});
