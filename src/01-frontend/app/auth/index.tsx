import {
  StyleSheet,
  View,
  Pressable,
  Animated,
  Easing,
  Dimensions,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { ThemedText } from "@/components/themed-text";
import { useEffect, useRef } from "react";
import { Image } from "expo-image";

const { width } = Dimensions.get("window");

const CARD_WIDTH = Math.min(width * 0.85, 1050);

export default function AuthIntro() {

  const fade = useRef(new Animated.Value(0)).current;
  const slide = useRef(new Animated.Value(40)).current;
  const float = useRef(new Animated.Value(0)).current;

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
      })
    ]).start();

    Animated.loop(
      Animated.sequence([
        Animated.timing(float, {
          toValue: -8,
          duration: 2500,
          useNativeDriver: true,
        }),
        Animated.timing(float, {
          toValue: 0,
          duration: 2500,
          useNativeDriver: true,
        })
      ])
    ).start();

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
            width: CARD_WIDTH,
            opacity: fade,
            transform: [{ translateY: slide }]
          }
        ]}
      >

        {/* LEFT PANEL */}

        <View style={styles.leftPanel}>

          <ThemedText style={styles.title}>
            Smart Cal
          </ThemedText>

          <ThemedText style={styles.subtitle}>
            Productivity at its max...
          </ThemedText>

          <Animated.View style={{ transform: [{ translateY: float }] }}>
            <Image
              source={require("@/assets/images/neural-network.png")}
              style={styles.neural}
              contentFit="contain"
            />
          </Animated.View>

        </View>


        {/* RIGHT PANEL */}

        <View style={styles.rightPanel}>

          <ThemedText style={styles.welcome}>
            Welcome
          </ThemedText>

          <ThemedText style={styles.welcomeSub}>
            Press Continue to Sign In
          </ThemedText>


          <Pressable
            style={({ pressed }) => [
              styles.primary,
              pressed && { transform: [{ scale: 0.96 }] }
            ]}
            onPress={() => router.push("/auth/signin")}
          >
            <ThemedText style={styles.primaryText}>
              Continue
            </ThemedText>
          </Pressable>


          <Pressable
            style={({ pressed }) => [
              styles.secondary,
              pressed && { opacity: 0.7 }
            ]}
            onPress={() => {
              if (typeof window !== "undefined") {
                window.close();
              }
            }}
          >
            <ThemedText style={styles.secondaryText}>
              Exit
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


  /* MAIN CARD */

  card: {

    height: 540,

    flexDirection: "row",

    borderRadius: 32,

    overflow: "hidden",

    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 40,
    shadowOffset: { width: 0, height: 20 },

    elevation: 20,
  },


  /* LEFT PANEL */

  leftPanel: {

    flex: 1.4,

    backgroundColor: "#020617",

    padding: 60,

    justifyContent: "center",
    alignItems: "center",

    borderTopLeftRadius: 32,
    borderBottomLeftRadius: 32,

  },


  title: {
    fontSize: 52,
    fontWeight: "800",
    color: "white",
  },

  subtitle: {
    marginTop: 26,
    marginBottom: 20,
    color: "#94a3b8",
    textAlign: "center",
    fontSize: 16,
    maxWidth: 320,
  },

  neural: {
    width: 340,
    height: 280,
  },


  /* RIGHT PANEL */

  rightPanel: {

    flex: 1,

    backgroundColor: "#f1f5f9",

    padding: 70,

    justifyContent: "center",

    borderTopRightRadius: 32,
    borderBottomRightRadius: 32,

  },


  welcome: {
    fontSize: 34,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 10,
    color: "#020617",
  },

  welcomeSub: {
    textAlign: "center",
    marginBottom: 40,
    color: "#64748b",
  },


  primary: {
    backgroundColor: "#7a1e48",
    padding: 18,
    borderRadius: 30,
    alignItems: "center",
    marginBottom: 18,
  },

  primaryText: {
    color: "white",
    fontWeight: "600",
    fontSize: 16,
  },


  secondary: {
    borderWidth: 1,
    borderColor: "#475569",
    padding: 18,
    borderRadius: 30,
    alignItems: "center",
  },

  secondaryText: {
    color: "#475569",
  }

});