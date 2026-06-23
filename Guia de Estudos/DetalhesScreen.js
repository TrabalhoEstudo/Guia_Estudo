import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function DetalhesScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Detalhes</Text>

      <Text style={styles.texto}>
        Aqui aparecem mais informações sobre o item escolhido.
      </Text>

      <Button
        title="Voltar para Home"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  titulo: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 20,
  },
  texto: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
});