import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function RestaurantList() {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const fetchPlaces = async () => {
    try {
      const response = await fetch("http://10.0.2.2:3001/api/places_concert");
      const data = await response.json();
      setPlaces(data);
    } catch (error) {
      console.error("Erreur lors de la récupération des données :", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPlaces();
  }, []);


  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FontAwesome
          key={i}
          name={i <= rating ? "star" : "star-o"}
          size={16}
          color="#FFD700"
        />
      );
    }
    return stars;
  };


  const renderItem = ({ item }: any) => (
    <View style={styles.card}>
      <View style={styles.cardLeft}>
        <Text style={styles.placeTitle}>{item.name}</Text>
        <View style={styles.rating}>{renderStars(item.rating)}</View>
      </View>
      <TouchableOpacity style={styles.cardRight}>
        <Image
          source={{ uri: item.photo_url }}
          style={styles.placeImage}
          resizeMode="cover"
        />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
     <View style={styles.header}>
            <FontAwesome name="gear" size={24} color="#333" />
            <Text style={styles.title}>Oh, we go!</Text>
            <FontAwesome name="cog" size={24} color="#333" />
      </View>
      {/* Liste des lieux */}
      <View style={styles.listContainer}>
        {loading ? (
          <ActivityIndicator size="large" color="#FFD700" />
        ) : (
          <FlatList
            data={places}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
          />
        )}
      </View>

      {/* Navbar */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.footerButton}
          onPress={() => router.push("/home")}
        >
          <FontAwesome name="home" size={24} color="#333" />
          <Text style={styles.footerText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.footerButton}
          onPress={() => router.push("/map")}
        >
          <FontAwesome name="map-marker" size={24} color="#333" />
          <Text style={styles.footerText}>Map</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.footerButton}
          onPress={() => router.push("/social")}
        >
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
    backgroundColor: "#F4A300",
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
  listContainer: {
    flex: 1,
    padding: 10,
  },
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    elevation: 3,
  },
  cardLeft: {
    flex: 3,
    justifyContent: "center",
  },
  placeTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  rating: {
    flexDirection: "row",
    marginTop: 5,
  },
  cardRight: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  placeImage: {
    width: 70,
    height: 70,
    borderRadius: 10,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#F8D774",
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
