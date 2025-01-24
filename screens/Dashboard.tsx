import EventItem from "@/components/EventItem";
import { RootState } from "@/store";
import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const user = useSelector((state: RootState) => state.user.user);
  return (
    <View style={styles.root}>
      {user?.registeredEvents.length !== 0 ? (
        <FlatList
          data={user?.registeredEvents}
          keyExtractor={(event) => event.id}
          renderItem={({ item }) => <EventItem event={item} />}
        />
      ) : (
        <View style={styles.cont}>
          <Text style={styles.error}>Not Registered In Any Events </Text>
        </View>
      )}
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 16,
    backgroundColor: "#dedede",
  },
  cont: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  error: {
    color: "grey",
    alignSelf: "center",
  },
});
