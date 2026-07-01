import React, { useState } from "react";
import { autenticar } from "./Usuarios";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function entrar() {
  if (!email || !senha) {
    alert("Preencha todos os campos");
    return;
  }

  const usuario = autenticar(email, senha);

  if (usuario) {
    alert(`Bem-vindo, ${usuario.nome}!`);
    navigation.navigate("Home");
  } else {
    alert("E-mail ou senha incorretos.");
  }
}

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topo}>
        <Text style={styles.logo}>Flow Estudos</Text>
        <Text style={styles.subtitulo}>
          Aprenda no seu ritmo e alcance seus objetivos.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.titulo}>Entrar</Text>

        <TextInput
          style={styles.input}
          placeholder="E-mail"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />
        
        <TouchableOpacity
          style={styles.botao}
          onPress={entrar}
        >
          <Text style={styles.textoBotao}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity
    onPress={() => navigation.navigate("Cadastro")}>
      <Text style={styles.rodape}>
        Ainda não possui conta? Cadastre-se
    </Text>
    </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    justifyContent: "center",
    padding: 20,
  },

  topo: {
    alignItems: "center",
    marginBottom: 40,
  },

  logo: {
    fontSize: 38,
    fontWeight: "bold",
    color: "#0088FF",
  },

  subtitulo: {
    color: "#B8C9E8",
    textAlign: "center",
    marginTop: 10,
    fontSize: 15,
  },

  card: {
    backgroundColor: "#0B0F1A",
    padding: 25,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#152238",
  },

  titulo: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 25,
  },

  input: {
    backgroundColor: "#0F1629",
    color: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#1E3A6E",
    borderRadius: 14,
    padding: 15,
    marginBottom: 15,
  },

  botao: {
    backgroundColor: "#0088FF",
    padding: 16,
    borderRadius: 14,
    alignItems: "center",
  },

  textoBotao: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },

  rodape: {
    color: "#6B8EBF",
    textAlign: "center",
    marginTop: 20,
  },
});
