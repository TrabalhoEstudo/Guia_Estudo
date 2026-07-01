import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import {
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>

      {/* Cabeçalho */}

      <View style={styles.header}>
        <MaterialCommunityIcons
          name="book-open-page-variant"
          size={70}
          color="#4FC3F7"
        />

        <Text style={styles.titulo}>
          Seja bem-vindo ao seu guia de estudos
        </Text>

        <Text style={styles.subtitulo}>
          Aprenda no seu ritmo.
        </Text>
      </View>

      {/* Cards */}

      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate("Guia")}
      >
        <MaterialCommunityIcons
          name="book-multiple"
          size={45}
          color="#6EE7B7"
        />

        <Text style={styles.cardTitulo}>
          Guia de estudos
        </Text>

        <Text style={styles.cardTexto}>
          Visualize todos os guias
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate("Agenda")}
      >
        <FontAwesome5
          name="user-circle"
          size={42}
          color="#8B5CF6"
        />

        <Text style={styles.cardTitulo}>
          Agenda
        </Text>

        <Text style={styles.cardTexto}>
          Configurações da conta
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D1117",
    paddingHorizontal: 20,
    paddingTop: 70,
  },

  header: {
    alignItems: "center",
    marginBottom: 50,
  },

  titulo: {
    color: "#FFF",
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },

  subtitulo: {
    color: "#8B949E",
    fontSize: 16,
    marginTop: 10,
  },

  card: {
    backgroundColor: "#161B22",
    borderRadius: 20,
    padding: 30,
    alignItems: "center",
    marginBottom: 25,

    borderWidth: 1,
    borderColor: "#30363D",

    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
  },

  cardTitulo: {
    color: "#FFF",
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 15,
  },

  cardTexto: {
    color: "#8B949E",
    marginTop: 5,
    fontSize: 15,
  },
});
