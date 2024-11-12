import { Platform } from 'react-native';

// Détection de la plateforme et définition de l'API_URL en fonction
export const API_URL = Platform.select({
  ios: 'http://127.0.0.1:3001',   // Pour iOS, utiliser localhost (ou une IP spécifique si nécessaire)
  android: 'http://10.0.2.2:3001', // Pour Android, utiliser 10.0.2.2 (IP spéciale pour l'émulateur Android)
});