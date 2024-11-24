import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from "react-native";
import { useRouter } from "expo-router";

export default function SignupScreen() {
    const router = useRouter();


  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password_hash, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [city, setCity] = useState("");

 const handleSignup = () => {
    fetch('http://10.0.2.2:3001/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, email, password_hash})
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
            router.push("/home")
        } else {
          Alert.alert('Erreur', data.message || 'Erreur lors de l\'inscription');
        }
      })
   }

  const handleGoogleSignup = () => {
    Alert.alert("Google Signup", "S’inscrire avec Google.");
  };

  const handleInstagramSignup = () => {
    Alert.alert("Instagram Signup", "S’inscrire avec Instagram.");
  };

  return (
    <View style={styles.container}>
      {/* Header section */}
      <View style={styles.header}>
        <Text style={styles.title}>Inscription</Text>
        <Text style={styles.description}>
          Bacon ipsum dolor amet shankle prosciutto short ribs boudin rump landjaeger jowl corned beef flank
        </Text>
      </View>

      {/* Social buttons */}
      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButton} onPress={handleGoogleSignup}>
          <Image source={require("../assets/img/google.png")} style={styles.socialIcon} />
          <Text style={styles.socialButtonText}>S’inscrire avec Google</Text>
          <Text style={styles.arrow}>→</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.socialButton, { backgroundColor: "#E1306C" }]} onPress={handleInstagramSignup}>
          <Image source={require("../assets/img/insta.png")} style={styles.socialIcon} />
          <Text style={styles.socialButtonText}>S’inscrire avec Instagram</Text>
          <Text style={styles.arrow}>→</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.orText}>OU</Text>

      {/* Form inputs */}
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nom d’utilisateur"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Adresse mail"
          value={email}
          keyboardType="email-address"
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Mot de passe"
          value={password_hash}
          secureTextEntry={true}
          onChangeText={setPassword}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirmer le mot de passe"
          value={confirmPassword}
          secureTextEntry={true}
          onChangeText={setConfirmPassword}
        />
      </View>

      {/* Signup button */}
      <TouchableOpacity style={styles.submitButton} onPress={handleSignup}>
        <Text style={styles.submitButtonText}>S’inscrire</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push("/login")}>
              <Text style={styles.link}>Déjà un compte ? Connectez-vous</Text>
      </TouchableOpacity>
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
  orText: {
    textAlign: "center",
    marginVertical: 20,
    fontSize: 16,
    fontWeight: "bold",
    color: "#555",
  },
  formContainer: {
    paddingHorizontal: 20,
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
  submitButton: {
    backgroundColor: "#000",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: 20,
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  link: {
      marginTop: 10,
      color: "#007BFF",
      textAlign: "center",
    },
});
