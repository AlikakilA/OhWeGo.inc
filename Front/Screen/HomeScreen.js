// HomeScreen.js
import React from 'react';
import { ImageBackground,View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function HomeScreen() {

  const backgroundImage = {uri: './pic.png'}
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Oh, We Go!</Text>
        <TouchableOpacity style={styles.settingsIcon}>
          <Text style={{ fontSize: 18 }}>⚙️</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.grid}>
        <View style={styles.row}>
          <TouchableOpacity style={[styles.button, styles.buttonYellow]}>
            <Text style={styles.buttonText}>RESTAURANT</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.buttonGreen]}>
            <Text style={styles.buttonText}>CONCERT / SOIRÉE</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity style={[styles.button, styles.buttonOrange]}>
            <Text style={styles.buttonText}>DIVERTISSEMENT</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.buttonBlue]}>
            <Text style={styles.buttonText}>SUPRENEZ MOI</Text>

          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.navbar}>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navButtonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navButtonText}>Map</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navButtonText}>Social</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAF0F1',
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFAA00',
  },
  settingsIcon: {
    fontSize: 18,
  },
  grid: {
    flex: 1,
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  button: {
    width: '45%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    elevation: 5,
  },
  buttonYellow: {
    backgroundColor: '#FFDD67',
  },
  buttonGreen: {
    backgroundColor: '#A4EBF3',
  },
  buttonOrange: {
    backgroundColor: '#FFD580',
  },
  buttonBlue: {
    backgroundColor: '#C4FCEF',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  diceImage: {
    width: 40,
    height: 40,
    marginTop: 10,
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFAA00',
    paddingVertical: 10,
  },
  navButton: {
    alignItems: 'center',
  },
  navButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  backgroundImage: {
    flex:3,
    justifyContent:'center',
  }
});
