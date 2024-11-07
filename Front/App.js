import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Fonction appelé par défaut, cela va rapidement changer
export default function App() {
  // création variables où va etre stocké la données de la bdd
  const [message, setMessage] = useState('Loading...');

  // exemple d'ajout d'une variable
  const test = "testsddkkddtst";

  // fonction qui va faire le fetch à la base de données
  //
  // Dois etre passé avec AXIOS surement
  useEffect(() => {
    fetch('http://10.0.2.2:3001/api/message') 
      .then(response => {
        if (!response.ok) {
          throw new Error('Erreur de réseau, status ' + response.status);
        }
        return response.json();
      })
      .then(data => setMessage(data.message))
      .catch(error => {
        console.error("Erreur de requête:", error);
        setMessage('Error: ' + error.message);
      });
  }, []);

  // return de la fonction qui peut etre appelé
  return (
  // variable "message" avec la réponse de la requete et "test"
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>
      <Text style={styles.text}>{test}</Text>
    </View>

  );
}

// CSS des balises précedentes
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});
