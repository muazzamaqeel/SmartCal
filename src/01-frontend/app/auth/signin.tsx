import { StyleSheet, View, TextInput, Pressable, Animated, Easing } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { ThemedText } from "@/components/themed-text";
import { useEffect, useRef } from "react";

export default function SignIn() {

  const fade = useRef(new Animated.Value(0)).current;
  const slide = useRef(new Animated.Value(40)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fade, {
        toValue: 1,
        duration: 700,
        easing: Easing.out(Easing.exp),
        useNativeDriver: true,
      }),
      Animated.timing(slide, {
        toValue: 0,
        duration: 700,
        easing: Easing.out(Easing.exp),
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <LinearGradient
      colors={["#020617", "#0f172a", "#020617"]}
      style={styles.screen}
    >

      <Animated.View
        style={[
          styles.card,
          {
            opacity: fade,
            transform: [{ translateY: slide }],
          },
        ]}
      >

        {/* LEFT SIDE */}
        <View style={styles.leftContainer}>

          <LinearGradient
            colors={["#4c0a2f", "#7a1e48"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.leftPanel}
          >

              <View style={styles.signupBlock}>

                <ThemedText style={styles.signupTitle}>SignUp</ThemedText>

                <ThemedText style={styles.signupText}>
                  Create an account and start managing your life with AI
                </ThemedText>

              </View>

              <Pressable
                style={({ pressed }) => [
                  styles.signupButton,
                  pressed && { opacity: 0.8 }
                ]}
              >
                   
             <ThemedText style={styles.signupButtonText}>
                Create Account
              </ThemedText>
            </Pressable>

          </LinearGradient>

        </View>


        {/* RIGHT SIDE */}
        <View style={styles.rightPanel}>

          <View style={styles.titleBlock}>

            <ThemedText style={styles.signinTitle}>
              Login
            </ThemedText>

            <ThemedText style={styles.signinSubtitle}>
              Sign in to continue
            </ThemedText>

          </View>

          <TextInput
            placeholder="Email"
            placeholderTextColor="#94a3b8"
            style={styles.input}
          />

          <TextInput
            placeholder="Password"
            placeholderTextColor="#94a3b8"
            secureTextEntry
            style={styles.input}
          />

          <Pressable
            style={({ pressed }) => [
              styles.loginButton,
              pressed && { transform: [{ scale: 0.97 }] }
            ]}
            onPress={() => router.replace("/(tabs)")}
          >
            <ThemedText style={styles.loginText}>
              Sign In
            </ThemedText>
          </Pressable>

        </View>

      </Animated.View>

    </LinearGradient>
  );
}

const styles = StyleSheet.create({

  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  card: {
    width: 1020,
    height: 520,
    flexDirection: "row",

    borderRadius: 28,
    padding: 10,

    backgroundColor: "rgba(255,255,255,0.04)",

    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 60,
    shadowOffset: { width: 0, height: 30 },

    elevation: 20,
  },

  leftContainer: {
    flex: 1,
    borderRadius: 22,
    overflow: "hidden",
  },

  leftPanel: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 60,
  },

  signupTitle: {
    fontSize: 36,
    fontWeight: "700",
    color: "white",
  },

  signupText: {
    color: "white",
    opacity: 0.85,
    textAlign: "center",
    marginTop: 12,
    fontSize: 16,
    gap: 20,
    maxWidth: 240,
  },

  signupButton: {
    marginTop: 35,
    borderWidth: 1,
    borderColor: "white",
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 30,
  },

  signupButtonText: {
    color: "white",
    fontWeight: "600",
  },

  rightPanel: {
    flex: 1.3,
    padding: 70,
    justifyContent: "center",
    backgroundColor: "#f8fafc",
    borderRadius: 22,
  },

  signinTitle: {
    fontSize: 30,
    fontWeight: "700",
    textAlign: "center",
    color: "#020617",
  },

  signinSubtitle: {
    textAlign: "center",
    marginBottom: 30,
    color: "#64748b",
  },

  titleBlock: {
  alignItems: "center",
  marginBottom: 25,
  gap: 20,
  },

  socialRow: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 12,
    marginBottom: 16,
  },

  social: {
    width: 42,
    height: 42,
    borderRadius: 21,
    borderWidth: 1,
    borderColor: "#cbd5f5",
    justifyContent: "center",
    alignItems: "center",
  },

  orText: {
    textAlign: "center",
    marginBottom: 15,
    color: "#94a3b8",
  },

  input: {
    borderWidth: 1,
    borderColor: "#d1d5db",
    padding: 14,
    borderRadius: 10,
    marginBottom: 14,
    fontSize: 15,
    backgroundColor: "#ffffff",
  },

  loginButton: {
    marginTop: 10,
    backgroundColor: "#7a1e48",
    padding: 16,
    borderRadius: 30,
    alignItems: "center",
  },

  loginText: {
    color: "white",
    fontWeight: "600",
    fontSize: 15,
  },
  
  signupBlock: {
  alignItems: "center",
  gap: 20,
  },

});