import { View, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";

export default function DevicesScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Devices</ThemedText>

      <ThemedText style={styles.subtitle}>
        Manage all connected devices
      </ThemedText>

      <Link href="/devices/add" style={styles.button}>
        <ThemedText>Add Device</ThemedText>
      </Link>

      <View style={styles.list}>
        <ThemedText>Device #1</ThemedText>
        <ThemedText>Device #2</ThemedText>
        <ThemedText>Device #3</ThemedText>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    gap: 16,
  },

  subtitle: {
    opacity: 0.7,
  },

  button: {
    padding: 12,
    borderRadius: 10,
    backgroundColor: "#334155",
    marginTop: 10,
  },

  list: {
    marginTop: 20,
    gap: 8,
  },
});