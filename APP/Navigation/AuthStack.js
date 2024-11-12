// navigation/AuthStack.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../Front/Screen/LoginScreen.js';
import SignupScreen from '../Front/Screen/SignupScreen.js';

const Stack = createStackNavigator();


// Voici le AuthStack, c'est le stack, qui va gèrer les authentifications
// Il y a deux pages dans cette stack sont Login et SignUp
// Ces deux là car on va naviguer entre les deux au début pour signup ou login
// et il n'y a pas besoin d'y avoir accés lors ce que la connexion est établie
export default function AuthStack({ setIsLoggedIn }) {
  return (
    // le screenOptions à false sert à ne pas afficher le bandeau de retour qui est là par défaut
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login">
         {/*La props sert à tcheker en continue si la variable setIsLoggedIn est false
         dès qu'elle passe à true on passe sur le Tab */}
        {(props) => <LoginScreen {...props} setIsLoggedIn={setIsLoggedIn} />}
      </Stack.Screen>
      <Stack.Screen name="Signup">
        {/* pareil que pour login*/}
        {(props) => <SignupScreen {...props} setIsLoggedIn={setIsLoggedIn} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}