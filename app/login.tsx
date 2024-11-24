import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
} from "react-native";

export default function LoginScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

    const handleLogin = () => {
      fetch('http://10.0.2.2:3001/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      })
        .then(response => response.json())
        .then(data => {
            if (data.success) {

            } else {
                Alert.alert('Erreur', data.message || 'Erreur lors du log');
            }
        })
    };

  const handleGoogleLogin = () => {
    Alert.alert("Google Login", "Se connecter avec Google.");
  };

  const handleInstagramLogin = () => {
    Alert.alert("Instagram Login", "Se connecter avec Instagram.");
  };

  const handleForgotPassword = () => {
    Alert.alert("Mot de passe oublié", "Lien de récupération envoyé.");
  };

  return (
    <View style={styles.container}>
      {/* Header section */}
      <View style={styles.header}>
        <Text style={styles.title}>Connexion</Text>
        <Text style={styles.description}>
          Bacon ipsum dolor amet shankle prosciutto short ribs boudin rump
          landjaeger jowl corned beef flank
        </Text>
      </View>

      {/* Form inputs */}
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          keyboardType="email-address"
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Mot de passe"
          value={password}
          secureTextEntry={true}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={styles.forgotPassword}>Mot de passe oublié ?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.submitButton} onPress={handleLogin}>
          <Text style={styles.submitButtonText}>Se connecter</Text>
        </TouchableOpacity>
      </View>

      {/* Social buttons */}
      <View style={styles.socialContainer}>
        <TouchableOpacity
          style={styles.socialButton}
          onPress={handleGoogleLogin}
        >
          <Image
            source={require("../assets/img/google.png")}
            style={styles.socialIcon}
          />
          <Text style={styles.socialButtonText}>Se connecter avec Google</Text>
          <Text style={styles.arrow}>→</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.socialButton, { backgroundColor: "#E1306C" }]}
          onPress={handleInstagramLogin}
        >
          <Image
            source={require("../assets/img/insta.png")}
            style={styles.socialIcon}
          />
          <Text style={styles.socialButtonText}>
            Se connecter avec Instagram
          </Text>
          <Text style={styles.arrow}>→</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: "#F4A300",
    padding: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: "#333",
    textAlign: "center",
  },
  formContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#f9f9f9",
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
    fontSize: 16,
  },
  forgotPassword: {
    fontSize: 14,
    color: "#555",
    textAlign: "right",
    marginBottom: 20,
  },
  submitButton: {
    backgroundColor: "#000",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  socialContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  socialButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#4285F4",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  socialIcon: {
    width: 24,
    height: 24,
  },
  socialButtonText: {
    flex: 1,
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
    marginLeft: 10,
  },
  arrow: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
});
