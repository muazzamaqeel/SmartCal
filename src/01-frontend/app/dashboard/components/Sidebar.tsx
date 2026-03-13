import { View, StyleSheet, Pressable, Animated } from "react-native";
import { useState, useRef } from "react";
import { Link, type Href } from "expo-router";
import { ThemedText } from "@/components/themed-text";

export default function Sidebar() {

  const [collapsed, setCollapsed] = useState(false);
  const widthAnim = useRef(new Animated.Value(240)).current;

  function toggle() {
    const toValue = collapsed ? 240 : 70;

    Animated.timing(widthAnim, {
      toValue,
      duration: 250,
      useNativeDriver: false,
    }).start();

    setCollapsed(!collapsed);
  }

  return (
    <Animated.View style={[styles.sidebar, { width: widthAnim }]}>

      <Pressable style={styles.toggle} onPress={toggle}>
        <ThemedText>{collapsed ? ">" : "<"}</ThemedText>
      </Pressable>

      <View style={styles.menu}>

        <NavItem label="Home" link="/dashboard" collapsed={collapsed}/>
        <NavItem label="Devices" link="/devices" collapsed={collapsed}/>
        <NavItem label="Models" link="/dashboard/models" collapsed={collapsed}/>
        <NavItem label="Analytics" link="/dashboard/analytics" collapsed={collapsed}/>

      </View>

    </Animated.View>
  );
}

function NavItem({
  label,
  link,
  collapsed,
}: {
  label: string;
  link: Href;
  collapsed: boolean;
}) {
  return (
    <Link href={link} asChild>
      <Pressable style={styles.item}>
        {!collapsed && <ThemedText>{label}</ThemedText>}
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({

  sidebar: {
    backgroundColor: "#020617",
    paddingTop: 40,
    borderRightWidth: 1,
    borderRightColor: "#1e293b",
  },

  toggle: {
    padding: 16,
    alignItems: "center",
  },

  menu: {
    padding: 20,
    gap: 16,
  },

  item: {
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: "#0f172a",
  },

});