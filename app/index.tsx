import { store } from "@/store";
import { Provider } from "react-redux";
import StackNavigator from "@/navigation/StackNavigator";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Index() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <StackNavigator />
      </Provider>
    </GestureHandlerRootView>
  );
}
