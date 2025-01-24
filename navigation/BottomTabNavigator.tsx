import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Events from "@/screens/Events";
import Dashboard from "@/screens/Dashboard";
import Login from "@/screens/Login";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const isAuth = useSelector((state: RootState) => state.user.isAuth);

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Events"
        component={Events}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              color={color}
              size={size}
            />
          ),
        }}
      />
      {isAuth && (
        <Tab.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <Ionicons
                name={focused ? "calendar" : "calendar-outline"}
                color={color}
                size={size}
              />
            ),
          }}
        />
      )}
      <Tab.Screen
        name="Login"
        component={Login}
        options={{
          tabBarLabel: isAuth ? "Profile" : "Login",
          title: isAuth ? "Profile" : "Login",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "log-in" : "log-in-outline"}
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
