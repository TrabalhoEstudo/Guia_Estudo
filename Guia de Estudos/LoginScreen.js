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

        <TouchableOpacity>
          <Text style={styles.esqueciSenha}>
            Esqueceu sua senha?
          </Text>
        </TouchableOpacity>

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
    backgroundColor: "#121212",
    justifyContent: "center",
    padding: 25,
  },

  topo: {
    alignItems: "center",
    marginBottom: 40,
  },

  logo: {
    fontSize: 38,
    fontWeight: "bold",
    color: "#4F8CFF",
  },

  subtitulo: {
    color: "#B3B3B3",
    textAlign: "center",
    marginTop: 10,
    fontSize: 15,
  },

  card: {
    backgroundColor: "#1E1E1E",
    padding: 25,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#2D2D2D",
  },

  titulo: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 25,
  },

  input: {
    backgroundColor: "#2A2A2A",
    color: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#3A3A3A",
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
  },

  esqueciSenha: {
    color: "#4F8CFF",
    textAlign: "right",
    marginBottom: 20,
  },

  botao: {
    backgroundColor: "#4F8CFF",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
  },

  textoBotao: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },

  rodape: {
    color: "#B3B3B3",
    textAlign: "center",
    marginTop: 20,
  },
});
