import { Event } from "@/types";
import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import MyBttn from "../MyBttn";
import { useDispatch, useSelector } from "react-redux";
import { userAction } from "@/store/user-slice";
import { RootState } from "@/store";
import { eventsAction } from "@/store/data-slice";
import { Ionicons } from "@expo/vector-icons";

type BottomContProps = {
  event: Event;
};
const BottomCont = ({ event }: BottomContProps) => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state: RootState) => state.user.isAuth);
  const userRegisteredEvents = useSelector(
    (state: RootState) => state.user.user?.registeredEvents
  );
  const isRegistered = !!userRegisteredEvents?.find((e) => e.id === event.id);
  const [errorMssg, setErrorMssg] = useState("");

  const registerHandler = () => {
    if (!isAuth) {
      setErrorMssg("Pls login first");
      return;
    }
    if (event.spots === 0) {
      setErrorMssg("No availble spots");
      return;
    }
    dispatch(userAction.registerEvent({ event, isRegistered }));
    dispatch(eventsAction.updateEventSpots({ event, isRegistered }));
  };
  return (
    <View style={styles.bottomCont}>
      <Text style={styles.bottomContTitle}>About Event</Text>
      <Text style={styles.subtitle}>{event.description}</Text>
      <Text style={styles.bottomContTitle}>Speakers</Text>
      {event.speakers.length !== 0 ? (
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={event.speakers}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <View style={styles.speakersCont}>
              <Text style={styles.speakersText}>{item}</Text>
            </View>
          )}
        />
      ) : (
        <Text style={styles.subtitle}>
          No Speakers are scheduled for this event
        </Text>
      )}
      <View style={styles.finalCont}>
        <View>
          <Text style={styles.title}>
            Capacity:{" "}
            <Text style={styles.subtitle}>
              {event.capacity} <Ionicons name="person-circle-outline" color="blue" />
            </Text>
          </Text>
          {errorMssg && <Text style={styles.errorMssg}>{errorMssg}</Text>}
        </View>

        <MyBttn
          text={isRegistered ? "Registered" : "Register"}
          bttnStyle={styles.registerBttn}
          onPress={registerHandler}
        />
      </View>
    </View>
  );
};

export default BottomCont;

const styles = StyleSheet.create({
  subtitle: {
    color: "grey",
    fontSize: 15,
  },

  bottomCont: {
    // marginTop: 15,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 20,
  },
  bottomContTitle: {
    fontSize: 20,
    fontWeight: "500",
    paddingVertical: 7,
    fontStyle: "italic",
  },
  speakersCont: {
    backgroundColor: "#dedede",
    paddingVertical: 5,
    paddingHorizontal: 8,
    borderRadius: 10,
    marginHorizontal: 2.5,
  },
  speakersText: {
    color: "grey",
  },
  registerBttn: {
    marginTop: 20,
    borderRadius: 20,
    width: "50%",
    backgroundColor: "blue",
  },
  finalCont: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
    paddingTop: 7,
    fontStyle: "italic",
  },
  errorMssg: {
    color: "red",
    marginLeft: 5,
    fontSize: 13,
  },
});
