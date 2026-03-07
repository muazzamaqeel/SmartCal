import { View, StyleSheet, TextInput, Pressable } from "react-native";
import { useRouter, type Href } from "expo-router";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { useState } from "react";

export default function AddDeviceScreen() {
  const router = useRouter();

  const [deviceName, setDeviceName] = useState("");

  function handleAdd() {
    console.log("Device added:", deviceName);

    // Go back to devices page
    router.push("/devices" as Href);
  }

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Add Device</ThemedText>

      <TextInput
        placeholder="Device name"
        style={styles.input}
        value={deviceName}
        onChangeText={setDeviceName}
      />

      <Pressable style={styles.button} onPress={handleAdd}>
        <ThemedText>Add Device</ThemedText>
      </Pressable>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    gap: 16,
  },

  input: {
    borderWidth: 1,
    borderColor: "#334155",
    borderRadius: 10,
    padding: 12,
    color: "white",
  },

  button: {
    padding: 14,
    borderRadius: 12,
    backgroundColor: "#334155",
    alignItems: "center",
  },
});