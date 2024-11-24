//import React from "react";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" options={{ title: "zzzzz" }} />
      <Stack.Screen name="login" options={{ title: "Connexion" }} />
      <Stack.Screen name="home" options={{ title: "Accueil" }} />
      <Stack.Screen name="museum_page" options={{ title: "Museum page" }} />
      <Stack.Screen name="restaurant_page" options={{ title: "Restaurant page" }} />
      <Stack.Screen name="concert_page" options={{ title: "Restaurant page" }} />
      <Stack.Screen name="divertissement_page" options={{ title: "Restaurant page" }} />
    </Stack>
  );
}
