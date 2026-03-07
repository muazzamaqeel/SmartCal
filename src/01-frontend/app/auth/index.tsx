import {
  StyleSheet,
  View,
  Pressable,
  Animated,
  Easing,
  Dimensions,
  Text,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { ThemedText } from "@/components/themed-text";
import { useEffect, useRef } from "react";

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
          duration: 2800,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(float, {
          toValue: 0,
          duration: 2800,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        })
      ])
    ).start();

  }, []);

  return (

    <LinearGradient
      colors={["#020617", "#020617", "#020617", "#0f172a"]}
      locations={[0, 0.3, 0.6, 1]}
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
        
        <View style={styles.aiGlow}/>
        
        <View style={styles.leftPanel}>

          <ThemedText style={styles.title}>
            Smart Cal
          </ThemedText>

          <ThemedText style={styles.subtitle}>
            Productivity at its max...
          </ThemedText>


          {/* BIG 3D AI TEXT */}

          <Animated.View
            style={[
              styles.aiContainer,
              { transform: [{ translateY: float }] }            ]}
          >

            <Text style={[styles.aiText, styles.aiDepth4]}>AI</Text>
            <Text style={[styles.aiText, styles.aiDepth3]}>AI</Text>
            <Text style={[styles.aiText, styles.aiDepth2]}>AI</Text>
            <Text style={[styles.aiText, styles.aiDepth1]}>AI</Text>

            <Text style={styles.aiFront}>AI</Text>

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
              pressed && { transform: [{ scale: 0.97 }], opacity: 0.9 }            ]}
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

  aiGlow: {
  position: "absolute",
  width: 320,
  height: 320,
  backgroundColor: "#3b82f6",
  borderRadius: 200,
  opacity: 0.15,
  },

  card: {
    height: 540,
    flexDirection: "row",
    borderRadius: 32,
    overflow: "hidden",

    shadowColor: "#000",
    shadowOpacity: 0.35,
    shadowRadius: 50,
    shadowOffset: { width: 0, height: 25 },

    elevation: 30,
  },

  leftPanel: {
    flex: 1.4,
    backgroundColor: "#020617",
    padding: 60,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 56,
    fontWeight: "900",
    color: "white",
    letterSpacing: 1,
  },

  subtitle: {
    marginTop: 26,
    marginBottom: 20,
    color: "#94a3b8",
    textAlign: "center",
    fontSize: 16,
    maxWidth: 320,
  },

  /* AI TEXT */

  aiContainer: {
    marginTop: -20,
    alignItems: "center",
    justifyContent: "center",
  },

  aiText: {
    position: "absolute",
    fontSize: 170,
    fontWeight: "900",
    letterSpacing: 6,
  },

  aiDepth1: {
    color: "#1e293b",
    transform: [{ translateX: 6 }, { translateY: 6 }],
  },

  aiDepth2: {
    color: "#0f172a",
    transform: [{ translateX: 12 }, { translateY: 12 }],
  },

  aiDepth3: {
    color: "#020617",
    transform: [{ translateX: 18 }, { translateY: 18 }],
  },

aiDepth4: {
  color: "#000000",
  transform: [{ translateX: 28 }, { translateY: 28 }],
},

  aiFront: {
    fontSize: 170,
    fontWeight: "900",
    letterSpacing: 6,
    color: "#ffffff",

    textShadowColor: "#38bdf8",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 60,
  },
  /* RIGHT PANEL */

rightPanel: {
  flex: 1,
  backgroundColor: "#f8fafc",
  padding: 70,
  justifyContent: "center",
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

    shadowColor: "#7a1e48",
    shadowOpacity: 0.4,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 10 },

    elevation: 6,
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