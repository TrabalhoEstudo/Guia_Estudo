import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function ListaScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de Itens</Text>

      <Text style={styles.item}>1 - Item Exemplo A</Text>
      <Text style={styles.item}>2 - Item Exemplo B</Text>
      <Text style={styles.item}>3 - Item Exemplo C</Text>

      <Button
        title="Ver Detalhes do Item"
        onPress={() => navigation.navigate("Detalhes")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    marginBottom: 20,
  },
  item: {
    fontSize: 18,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
});