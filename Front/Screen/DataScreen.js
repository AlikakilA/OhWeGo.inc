import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';



// Page pour le test avec affichage de toute la table users
export default function DataScreen() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://10.0.2.2:3001/api/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Utilisateurs enregistrés</Text>
      <FlatList
        data={users}
        keyExtractor={(item, index) => (item.id ? item.id.toString() : index.toString())}
        renderItem={({ item }) => (
          <View style={styles.userItem}>
            <Text>Username: {item.username || 'Nom non disponible'}</Text>
            <Text>Email: {item.email || 'Email non disponible'}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  userItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});
