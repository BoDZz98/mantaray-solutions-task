import React, { useLayoutEffect } from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

import { ScrollView } from "react-native-gesture-handler";

import { Event } from "@/types";
import BackBttn from "@/components/event-details/BackBttn";
import MiddleCont from "@/components/event-details/MiddleCont";
import BottomCont from "@/components/event-details/BottomCont";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

type EventDetailsProps = {
  route: any;
  navigation: any;
};

const EventDetails = ({ route, navigation }: EventDetailsProps) => {
  const eventId = route.params.eventId as string;
  const event = useSelector((state: RootState) =>
    state.events.events.find((e) => e.id === eventId)
  ) as Event;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <BackBttn />,
    });
  }, []);

  return (
    <ScrollView style={styles.root} showsVerticalScrollIndicator={false}>
      <View style={styles.imgCont}>
        <Image style={styles.image} source={{ uri: event.image }} />
      </View>

      <MiddleCont event={event} />
      <BottomCont event={event} />
    </ScrollView>
  );
};

export default EventDetails;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#dedede",
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  imgCont: {
    justifyContent: "center",
    alignItems: "center",
    height: Dimensions.get("window").height * 0.45,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
  },
});
