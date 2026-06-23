import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function PerfilScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Perfil do Usuário</Text>

      <Text>Nome: Usuário Exemplo</Text>
      <Text>Email: usuario@email.com</Text>

      <Button
        title="Sair"
        onPress={() => navigation.navigate("Login")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    gap: 10,
  },
  titulo: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
  },
});