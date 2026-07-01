import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider as PaperProvider } from 'react-native-paper';

import LoginScreen from "./LoginScreen";
import HomeScreen from "./HomeScreen";
import GuiaEstudos from "./GuiaEstudos";
import Agenda from "./Agenda";
import CadastroScreen from "./CadastroScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
  <PaperProvider>
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
        options={{ headerShown: false }}
        />

        <Stack.Screen 
          name="GuiaEstudos" 
          component={GuiaEstudos}
          options={{ headerShown: false }}
        />

        <Stack.Screen 
          name="Agenda" 
          component={Agenda}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
 </PaperProvider>
  );
}
