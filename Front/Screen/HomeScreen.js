import React, {useState} from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

export default function HomeScreen () {
    const homescreen = "Coming soon...";

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{homescreen}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    padding:120,
    marginBottom:20,
    textAlign: 'center',
  }})