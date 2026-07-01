import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "./LoginScreen";
import HomeScreen from "./HomeScreen";
import ListaScreen from "./ListaScreen";
import DetalhesScreen from "./DetalhesScreen";
import PerfilScreen from "./PerfilScreen";
import CadastroScreen from "./CadastroScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
        />
        <Stack.Screen
        name="Cadastro"
        component={CadastroScreen}
        options={{ headerShown: false }}
        />
        <Stack.Screen
        name="Home"
        component={HomeScreen}
        />

        <Stack.Screen 
          name="Guia" 
          component={ListaScreen}
          options={{ title: "Guia" }}
        />

        <Stack.Screen 
          name="Detalhes" 
          component={DetalhesScreen}
          options={{ title: "Detalhes" }}
        />

        <Stack.Screen 
          name="Agenda" 
          component={PerfilScreen}
          options={{ title: "Agenda" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
