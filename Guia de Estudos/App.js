import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "./LoginScreen";
import HomeScreen from "./HomeScreen";
import ListaScreen from "./ListaScreen";
import DetalhesScreen from "./DetalhesScreen";
import PerfilScreen from "./PerfilScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Login" 
          component={LoginScreen}
          options={{ title: "Entrar" }}
        />

        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={{ title: "Início" }}
        />

        <Stack.Screen 
          name="Lista" 
          component={ListaScreen}
          options={{ title: "Lista" }}
        />

        <Stack.Screen 
          name="Detalhes" 
          component={DetalhesScreen}
          options={{ title: "Detalhes" }}
        />

        <Stack.Screen 
          name="Perfil" 
          component={PerfilScreen}
          options={{ title: "Perfil" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}