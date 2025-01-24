import { Event } from "@/types";
import { DateConverter } from "@/utils/util-functions";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

const EventItem = ({ event }: { event: Event }) => {
  const navigation = useNavigation();
  const eventPrice = event.price === "0" ? "Free" : event.price + " $";

  return (
    <Pressable
      style={styles.root}
      onPress={() => {
        // @ts-ignore
        navigation.navigate("eventDetails", { eventId: event.id });
      }}
      android_ripple={{ color: "#ccc" }}
    >
      <View style={styles.imageCont}>
        <Image
          style={styles.image}
          resizeMode="stretch"
          source={{ uri: event.image }}
        />
      </View>

      <View style={styles.textCont}>
        <Text style={styles.title}>{event.name}</Text>
        <Text style={styles.text}>
          Price : <Text style={styles.innerText}>{eventPrice}</Text>
        </Text>
        <Text style={styles.text}>
          Location : <Text style={styles.innerText}>{event.location}</Text>
        </Text>
        <Text style={styles.text}>
          Date :
          <Text style={styles.innerText}> {DateConverter(event.date)}</Text>
        </Text>
      </View>
    </Pressable>
  );
};

export default EventItem;

const styles = StyleSheet.create({
  root: {
    height: Dimensions.get("window").height * 0.23,
    // width: "100%",
    backgroundColor: "white",
    marginVertical: 20,
    padding: 12,
    flexDirection: "row",
    borderRadius: 10,
  },
  imageCont: {
    width: "35%",
    height: "120%",
    borderRadius: 10,
  },
  image: {
    bottom: 30,
    position: "absolute",
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  textCont: {
    width: "55%",
    marginHorizontal: 16,
    marginVertical: 10,
  },

  title: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 20,
    marginBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: "grey",
    // maxWidth: "95%",
  },
  text: {
    color: "black",
    fontWeight: "bold",
    fontSize: 15,
  },
  innerText: {
    color: "grey",
    fontWeight: "normal",
    fontSize: 13,
  },
});
