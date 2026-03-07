import { StyleSheet, View, Pressable } from "react-native";
import { Link } from "expo-router";
import { ThemedText } from "@/components/themed-text";

export default function AuthIntro() {
  return (
    <View style={styles.container}>
      <ThemedText style={styles.title}>AI Platform</ThemedText>

      <ThemedText style={styles.subtitle}>
        Deploy AI models, manage devices and monitor infrastructure
      </ThemedText>

      <View style={styles.buttons}>
        <Link href="/auth/signin" asChild>
          <Pressable style={styles.primary}>
            <ThemedText style={styles.primaryText}>Sign In</ThemedText>
          </Pressable>
        </Link>

        <Pressable style={styles.secondary}>
          <ThemedText>Create Account</ThemedText>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 40,
    backgroundColor: "#0f172a",
  },

  title: {
    fontSize: 36,
    fontWeight: "700",
    marginBottom: 10,
  },

  subtitle: {
    opacity: 0.7,
    textAlign: "center",
    marginBottom: 40,
  },

  buttons: {
    width: "80%",
    gap: 16,
  },

  primary: {
    backgroundColor: "#3b82f6",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
  },

  primaryText: {
    color: "white",
    fontWeight: "600",
  },

  secondary: {
    borderWidth: 1,
    borderColor: "#475569",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
  },
});