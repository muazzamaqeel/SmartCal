import { View, StyleSheet, Pressable, Animated } from "react-native";
import { ThemedText } from "@/components/themed-text";
import { useRef } from "react";

export default function Dashboard() {

  return (

    <View style={styles.container}>

      <View style={styles.header}>
        <ThemedText type="title">AI Dashboard</ThemedText>

        <ThemedText style={styles.subtitle}>
          Monitor infrastructure and run AI models
        </ThemedText>
      </View>

      <View style={styles.grid}>

        <Card title="AI Models" value="3 Running" color="#2563eb"/>
        <Card title="Devices" value="12 Active" color="#16a34a"/>
        <Card title="Analytics" value="Live Data" color="#7c3aed"/>
        <Card title="Infrastructure" value="Healthy" color="#ea580c"/>

      </View>

    </View>

  );
}

function Card({
  title,
  value,
  color
}:{
  title:string
  value:string
  color:string
}){

  const scale = useRef(new Animated.Value(1)).current;

  function pressIn(){
    Animated.spring(scale,{
      toValue:0.95,
      useNativeDriver:true
    }).start();
  }

  function pressOut(){
    Animated.spring(scale,{
      toValue:1,
      useNativeDriver:true
    }).start();
  }

  return(

    <Pressable
      onPressIn={pressIn}
      onPressOut={pressOut}
    >

      <Animated.View
        style={[
          styles.card,
          {borderLeftColor:color, transform:[{scale}]}
        ]}
      >

        <ThemedText style={styles.cardTitle}>
          {title}
        </ThemedText>

        <ThemedText style={styles.cardValue}>
          {value}
        </ThemedText>

      </Animated.View>

    </Pressable>

  )

}

const styles = StyleSheet.create({

  container:{
    flex:1,
    gap:30
  },

  header:{
    gap:6
  },

  subtitle:{
    opacity:0.7
  },

  grid:{
    flexDirection:"row",
    flexWrap:"wrap",
    gap:20
  },

  card:{
    width:260,
    height:140,
    borderRadius:16,
    padding:20,

    backgroundColor:"#1e293b",

    borderLeftWidth:4,

    shadowColor:"#000",
    shadowOpacity:0.25,
    shadowRadius:20,
    shadowOffset:{width:0,height:10},

    elevation:8
  },

  cardTitle:{
    fontSize:16,
    opacity:0.8
  },

  cardValue:{
    fontSize:28,
    fontWeight:"700",
    marginTop:8
  }

});