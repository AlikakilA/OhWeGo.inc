import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

export default function SignupScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [mail, setMail] = useState('');

  const handleSignup = () => {
    fetch('http://10.0.2.2:3001/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, mail })
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          Alert.alert('Succès', 'Utilisateur enregistré');
          // Ici se fait la redirection vers la page appeler dans App.js
          navigation.navigate('Home');
        } else {
          Alert.alert('Erreur', data.message || 'Erreur lors de l\'inscription');
        }
      })
      .catch(error => {
        console.error(error);
        Alert.alert('Erreur', 'Impossible de contacter le serveur');
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Signup</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={mail}
        onChangeText={setMail}
      />
      <Button title="Signup" onPress={handleSignup} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});
