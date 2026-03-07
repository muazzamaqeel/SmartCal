import { StyleSheet, View, TextInput, Pressable } from "react-native";
import { router } from "expo-router";
import { ThemedText } from "@/components/themed-text";

export default function SignIn() {
  return (
    <View style={styles.container}>
      <ThemedText style={styles.title}>Sign In</ThemedText>

      <TextInput
        placeholder="Email"
        placeholderTextColor="#888"
        style={styles.input}
      />

      <TextInput
        placeholder="Password"
        placeholderTextColor="#888"
        secureTextEntry
        style={styles.input}
      />

      <Pressable
        style={styles.button}
        onPress={() => router.replace("/(tabs)")}
      >
        <ThemedText style={{ color: "white" }}>Login</ThemedText>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "center",
    padding: 40,
    backgroundColor: "#020617",
  },

  title: {
    fontSize: 32,
    fontWeight: "700",
    marginBottom: 30,
  },

  input: {
    borderWidth: 1,
    borderColor: "#334155",
    padding: 14,
    borderRadius: 10,
    marginBottom: 15,
    color: "white",
  },

  button: {
    marginTop: 10,
    backgroundColor: "#2563eb",
    padding: 16,
    borderRadius: 10,
    alignItems: "center",
  },
});