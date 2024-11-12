// App.js
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './Navigation/AuthStack.js';
import MainTabs from './Navigation/MainStack.js';


// Ici va se faire les changements entre stack et tab avec l'initialisation de la props
// verifiant le status de la connexion
export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // État de connexion

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <MainTabs />
      ) : (
        <AuthStack setIsLoggedIn={setIsLoggedIn} />
      )}
    </NavigationContainer>
  );
}