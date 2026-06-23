import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Tela Inicial</Text>

      <Text style={styles.texto}>
        Bem-vindo ao aplicativo!
      </Text>

      <Button
        title="Ver Lista"
        onPress={() => navigation.navigate("Lista")}
      />

      <Button
        title="Meu Perfil"
        onPress={() => navigation.navigate("Perfil")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 10,
    justifyContent: "center",
  },
  titulo: {
    fontSize: 26,
    textAlign: "center",
  },
  texto: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
});