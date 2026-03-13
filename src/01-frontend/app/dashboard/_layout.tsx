import { View, StyleSheet } from "react-native";
import { Slot } from "expo-router";
import Sidebar from "./components/Sidebar";

export default function DashboardLayout() {
  return (
    <View style={styles.container}>

      {/* LEFT SIDEBAR */}
      <Sidebar />

      {/* MAIN CONTENT */}
      <View style={styles.content}>
        <Slot />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#0f172a",
  },

  content: {
    flex: 1,
    padding: 30,
  },
});