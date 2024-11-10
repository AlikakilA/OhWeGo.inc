import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

export default function LoginScreen({ navigation, setIsLoggedIn }) { // Ajouter setIsLoggedIn comme prop
    const [username, setUsername] = useState('');
    const [mail, setMail] = useState('');

    const handleLogin = () => {
      fetch('http://10.0.2.2:3001/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, mail })
      })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                setIsLoggedIn(true); // Met à jour l’état de connexion
                //navigation.replace('Home'); // Redirige vers Home et empêche le retour
            } else {
                Alert.alert('Erreur', data.message || 'Erreur lors du log');
            }
        })
        .catch(error => {
            Alert.alert('Erreur', 'Impossible de contacter le serveur');
            console.error(error);
        });
    };

    // fonction pour redirigé
    const signupRedirect = () => {
        navigation.navigate('Signup');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                style={styles.input}
                placeholder="Mail"
                value={mail}
                onChangeText={setMail}
            />
            <Button title="Log in" onPress={handleLogin} />
            <Button title="Sign Up" onPress={signupRedirect}/>
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
