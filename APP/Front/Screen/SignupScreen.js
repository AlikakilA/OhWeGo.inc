import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { API_URL } from '../../config.js';

export default function SignupScreen({ navigation, setIsLoggedIn }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password_hash, setPassword] = useState('');

  //fonction SignUp pour faire la requete au serveur en envoyant un Json
  // Cela va changer avec l'ajout d'un JWT pour sécuriser la connection
  const handleSignup = () => {
    fetch(`${API_URL}/api/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, email, password_hash})
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
           setIsLoggedIn(true);
        } else {
          Alert.alert('Erreur', data.message || 'Erreur lors de l\'inscription');
        }
      })
      .catch(error => {
        console.error(error);
        Alert.alert('Erreur', 'Impossible de contacter le serveur');
      });
  };

  const loginRedirect = () => {
    navigation.navigate('Login');
  }

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
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password_hash}
        onChangeText={setPassword}
      />
      <Button title="Signup" onPress={handleSignup} />
      <Button title="Login" onPress={loginRedirect} />
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
    marginBottom: 40,
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
