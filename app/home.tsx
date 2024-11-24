import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <FontAwesome name="gear" size={24} color="#333" />
        <Text style={styles.title}>Oh, we go!</Text>
        <FontAwesome name="cog" size={24} color="#333" />
      </View>

      {/* Main Buttons */}
      <View style={styles.mainButtons}>
        <TouchableOpacity onPress={() => router.push("/museum_page")} style={[styles.button, { backgroundColor: "#FFD700" }]}>
          <FontAwesome name="university" size={32} color="#333" />
          <Text style={styles.buttonText}>MUSÉE</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("/restaurant_page")} style={[styles.button, { backgroundColor: "#90EE90" }]}>
          <Text style={styles.buttonText}>RESTAURANT</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("/concert_page")}  style={[styles.button, { backgroundColor: "#FFA500" }]}>
          <Text style={styles.buttonText}>CONCERT / SOIRÉE</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("/divertissement_page")}  style={[styles.button, { backgroundColor: "#00CED1" }]}>
          <Text style={styles.buttonText}>DIVERTISSEMENT</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.surpriseButton}
        onPress={() => alert("ça arrive !")}
      >
        <Text style={styles.surpriseText}>🎲 SURPRENEZ MOI</Text>
      </TouchableOpacity>

      {/* Footer Navigation */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}>
          <FontAwesome name="home" size={24} color="#333" />
          <Text style={styles.footerText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <FontAwesome name="map-marker" size={24} color="#333" />
          <Text style={styles.footerText}>Map</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <FontAwesome name="users" size={24} color="#333" />
          <Text style={styles.footerText}>Social</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0B351",
    justifyContent: "space-between",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  mainButtons: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    marginVertical: 20,
  },
  button: {
    width: "40%",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    borderRadius: 10,
    elevation: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
    color: "#333",
  },
  surpriseButton: {
    alignSelf: "center",
    alignItems: "center",
    marginVertical: 20,
    padding: 10,
    width: "60%",
    height: 120,
    borderRadius: 15,
    backgroundColor: "#FFF",
    elevation: 5,
    justifyContent: "center",
  },
  surpriseText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#F0B351",
    paddingVertical: 10,
  },
  footerButton: {
    alignItems: "center",
  },
  footerText: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
  },
});
