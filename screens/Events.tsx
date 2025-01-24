import EventItem from "@/components/EventItem";
import MyBttn from "@/components/MyBttn";
import { AppDispatch, RootState } from "@/store";
import { fetchEvents } from "@/store/data-slice";
import React, { useEffect, useState } from "react";
import { Button } from "react-native";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

const Events = () => {
  const [visibleEvents, setVisibleEvents] = useState(5);

  const dispatch = useDispatch<AppDispatch>();
  const { events, loading, error } = useSelector(
    (state: RootState) => state.events
  );

  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  const loadMore = () => setVisibleEvents((prev) => prev + 5);

  return (
    <View style={styles.container}>
      {loading && <Text>Loading...</Text>}
      {error && <Text style={styles.error}>Error: {error}</Text>}
      <FlatList
        showsVerticalScrollIndicator={false}
        data={events.slice(0, visibleEvents)}
        keyExtractor={(event) => event.id}
        renderItem={({ item }) => <EventItem event={item} />}
        ListFooterComponent={
          visibleEvents < events.length ? (
            <MyBttn
              text="Load more"
              onPress={loadMore}
              bttnStyle={styles.bttn}
            />
          ) : null
        }
      />
      {/* {visibleEvents < events.length && (
        <Button title="Load More" onPress={loadMore} />
      )} */}
    </View>
  );
};

export default Events;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#dedede",
  },

  error: {
    color: "red",
  },
  bttn: {
    backgroundColor: "blue",
  },
});
