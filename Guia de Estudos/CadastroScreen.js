import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import { criarUsuario } from "./Usuarios";

export default function CadastroScreen({ navigation }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  function cadastrar() {

    if (!nome || !email || !senha || !confirmarSenha) {
      alert("Preencha todos os campos.");
      return;
    }

    if (senha !== confirmarSenha) {
      alert("As senhas não coincidem.");
      return;
    }

    const resultado = criarUsuario(nome, email, senha);

    if (!resultado.sucesso) {
      alert(resultado.mensagem);
      return;
    }

    alert("Conta criada com sucesso!");

    navigation.goBack();
  }

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.topo}>
        <Text style={styles.logo}>Flow Estudos</Text>

        <Text style={styles.subtitulo}>
          Crie sua conta para começar seus estudos.
        </Text>
      </View>

      <View style={styles.card}>

        <Text style={styles.titulo}>
          Criar Conta
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Nome completo"
          placeholderTextColor="#888"
          value={nome}
          onChangeText={setNome}
        />

        <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="#888"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#888"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />

        <TextInput
          style={styles.input}
          placeholder="Confirmar senha"
          placeholderTextColor="#888"
          secureTextEntry
          value={confirmarSenha}
          onChangeText={setConfirmarSenha}
        />

        <TouchableOpacity
          style={styles.botao}
          onPress={cadastrar}
        >
          <Text style={styles.textoBotao}>
            Criar Conta
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.rodape}>
            Já possui uma conta? Entrar
          </Text>
        </TouchableOpacity>

      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor: "#000000",
    justifyContent:"center",
    padding: 20,
  },

  topo:{
    alignItems:"center",
    marginBottom:40,
  },

  logo:{
    fontSize:38,
    fontWeight:"bold",
    color: "#0088FF",
  },

  subtitulo:{
    color: "#B8C9E8",
    textAlign:"center",
    marginTop:10,
    fontSize:15,
  },

  card:{
    backgroundColor: "#0B0F1A",
    padding:25,
    borderRadius: 16,
    borderWidth:1,
    borderColor: "#152238",
  },

  titulo:{
    color: "#FFFFFF",
    fontSize:28,
    textAlign:"center",
    fontWeight:"bold",
    marginBottom:25,
  },

  input:{
    backgroundColor: "#0F1629",
    color: "#FFFFFF",
    borderWidth:1,
    borderColor: "#1E3A6E",
    borderRadius: 14,
    padding: 15,
    marginBottom:15,
  },

  botao:{
    backgroundColor: "#0088FF",
    padding:16,
    borderRadius: 14,
    alignItems:"center",
    marginTop:10,
  },

  textoBotao:{
    color: "#FFFFFF",
    fontWeight:"bold",
    fontSize:16,
  },

  rodape:{
    color: "#6B8EBF",
    textAlign:"center",
    marginTop:25,
  }

});