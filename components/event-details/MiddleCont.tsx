import { Event } from "@/types";
import { DateAndTimeConverter } from "@/utils/util-functions";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

type MiddleContProps = {
  event: Event;
};
const MiddleCont = ({ event }: MiddleContProps) => {
  const eventPrice = event.price === "0" ? "Free" : "$" + event.price;
  return (
    <View style={styles.middleCont}>
      <View>
        <Text style={styles.eventTitle}>{event.name}</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons name="calendar" size={15} color="blue" />
          <Text style={styles.subtitle}>
            {" "}
            {DateAndTimeConverter(event.date)}
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons name="location" size={15} color="blue" />
          <Text style={styles.subtitle}> {event.location}</Text>
        </View>
      </View>
      {/* Price */}
      <View style={styles.priceCont}>
        <Text style={styles.price}>{eventPrice}</Text>
        <Text style={styles.subtitle}>{event.spots} Seats available</Text>
      </View>
    </View>
  );
};

export default MiddleCont;

const styles = StyleSheet.create({
  middleCont: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "white",
    borderRadius: 20,
    marginVertical: 15,
  },

  eventTitle: {
    fontSize: 25,
    fontWeight: "bold",
    paddingVertical: 10,
    fontStyle: "italic",
  },
  subtitle: {
    color: "grey",
    fontSize: 15,
  },

  priceCont: {
    backgroundColor: "#dedede",
    borderRadius: 20,
    padding: 10,
    width: "30%",
    justifyContent: "center",
    alignItems: "center",
  },
  price: {
    color: "blue",
    fontSize: 20,
    fontWeight: "bold",
  },
});
