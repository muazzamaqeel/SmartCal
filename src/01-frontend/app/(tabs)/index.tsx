import { Image } from "expo-image";
import { StyleSheet, View, Pressable } from "react-native";
import { Link, type Href } from "expo-router";

import ParallaxScrollView from "@/components/parallax-scroll-view";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#0F172A", dark: "#020617" }}
      headerImage={
        <Image
          source={require("@/assets/images/react-logo.png")}
          style={styles.headerImage}
        />
      }
    >
      {/* HERO */}
      <ThemedView style={styles.hero}>
        <ThemedText type="title">AI Platform</ThemedText>
        <ThemedText style={styles.subtitle}>
          Monitor systems, run models and manage infrastructure
        </ThemedText>
      </ThemedView>

      {/* DASHBOARD CARDS */}
      <View style={styles.grid}>
        <DashboardCard
          title="Devices"
          subtitle="12 Active"
          link="/devices"
        />

        <DashboardCard
          title="AI Models"
          subtitle="3 Running"
          link="/models"
        />

        <DashboardCard
          title="Analytics"
          subtitle="View insights"
          link="/analytics"
        />

        <DashboardCard
          title="Infrastructure"
          subtitle="Healthy"
          link="/infrastructure"
        />
      </View>

      {/* QUICK ACTION */}
      <ThemedView style={styles.section}>
        <ThemedText type="subtitle">Quick Actions</ThemedText>

        <View style={styles.actions}>
          <ActionButton title="Deploy Model" link="/deploy" />
          <ActionButton title="Add Device" link="/devices/add" />
          <ActionButton title="View Logs" link="/logs" />
        </View>
      </ThemedView>
    </ParallaxScrollView>
  );
}

/* -------------------- Components -------------------- */

function DashboardCard({
  title,
  subtitle,
  link,
}: {
  title: string;
  subtitle: string;
  link: string;
}) {
  return (
    <Link href={link as Href} asChild>
      <Pressable style={styles.card}>
        <ThemedText type="subtitle">{title}</ThemedText>
        <ThemedText>{subtitle}</ThemedText>
      </Pressable>
    </Link>
  );
}

function ActionButton({
  title,
  link,
}: {
  title: string;
  link: string;
}) {
  return (
    <Link href={link as Href} asChild>
      <Pressable style={styles.action}>
        <ThemedText>{title}</ThemedText>
      </Pressable>
    </Link>
  );
}

/* -------------------- Styles -------------------- */

const styles = StyleSheet.create({
  headerImage: {
    height: 220,
    width: "100%",
    position: "absolute",
  },

  hero: {
    marginBottom: 24,
  },

  subtitle: {
    opacity: 0.7,
    marginTop: 4,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 16,
  },

  card: {
    width: "47%",
    padding: 20,
    borderRadius: 16,
    backgroundColor: "#1E293B",
  },

  section: {
    marginTop: 32,
    gap: 16,
  },

  actions: {
    flexDirection: "row",
    gap: 12,
  },

  action: {
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 12,
    backgroundColor: "#334155",
  },
});