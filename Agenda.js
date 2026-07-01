import React, { useState, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity, TextInput, Text, ScrollView } from "react-native";
import { DatePickerModal } from "react-native-paper-dates";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function DetalhesScreen({ navigation, route, useFocusEffect }) {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState(null);
  const [dataFormatada, setDataFormatada] = useState("");
  const [area, setArea] = useState(route?.params?.area || "");
  const [materia, setMateria] = useState(route?.params?.materia || "");
  const [agendas, setAgendas] = useState([]);
  const [mostrandoForm, setMostrandoForm] = useState(true);

  useEffect(() => {
    carregarAgendas();
  }, []);

  const carregarAgendas = async () => {
    try {
      const dados = await AsyncStorage.getItem("agenda");
      if (dados) {
        setAgendas(JSON.parse(dados));
      }
    } catch (error) {
      console.log("Erro ao carregar:", error);
    }
  };

  const onDismiss = () => {
    setOpen(false);
  };

  const onConfirm = ({ date }) => {
    setOpen(false);

    if (date) {
      setData(date);
      setDataFormatada(date.toLocaleDateString("pt-BR"));
    }
  };

  async function salvarAgenda() {
    if (!area || !materia || !dataFormatada) {
      alert("Preencha todos os campos!");
      return;
    }

    try {
      const dados = await AsyncStorage.getItem("agenda");
      const agenda = dados ? JSON.parse(dados) : [];

      agenda.push({
        id: Date.now(),
        area,
        materia,
        data: dataFormatada,
      });

      await AsyncStorage.setItem("agenda", JSON.stringify(agenda));
      setAgendas(agenda);

      alert("Agendamento realizado!");
      setArea(route?.params?.area || "");
      setMateria(route?.params?.materia || "");
      setDataFormatada("");
      setData(null);

    } catch (error) {
      console.log(error);
    }
  }

  async function deletarAgenda(id) {
    try {
      const novasAgendas = agendas.filter(item => item.id !== id);
      await AsyncStorage.setItem("agenda", JSON.stringify(novasAgendas));
      setAgendas(novasAgendas);
      alert("Agendamento removido!");
    } catch (error) {
      console.log("Erro ao deletar:", error);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Agenda
      </Text>

      {mostrandoForm ? (
        <ScrollView>
          <Text style={styles.texto}>
            Adicione um novo agendamento
          </Text>

          <TextInput
            placeholder="Área"
            placeholderTextColor="#B8C9E8"
            value={area}
            editable={true}
            style={styles.input}
            onChangeText={setArea}
          />

          <TextInput
            placeholder="Matéria"
            placeholderTextColor="#B8C9E8"
            value={materia}
            editable={true}
            style={styles.input}
            onChangeText={setMateria}
          />

          <TouchableOpacity
            style={styles.input}
            onPress={() => setOpen(true)}
            activeOpacity={0.7}
          >
            <Text style={{ color: dataFormatada ? "#FFFFFF" : "#B8C9E8" }}>
              {dataFormatada || "Data"}
            </Text>
          </TouchableOpacity>

          <DatePickerModal
            locale="pt-BR"
            mode="single"
            visible={open}
            onDismiss={onDismiss}
            date={data}
            onConfirm={onConfirm}
          />

          <TouchableOpacity
            style={styles.botao}
            onPress={salvarAgenda}
          >
            <Text style={styles.textoBotao}>Salvar Agendamento</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.botaoVoltar}
            onPress={() => setMostrandoForm(false)}
          >
            <Text style={styles.textoVoltar}>Ver Agendamentos</Text>
          </TouchableOpacity>
        </ScrollView>
      ) : (
        <ScrollView>
          <Text style={styles.texto}>
            Seus agendamentos ({agendas.length})
          </Text>

          {agendas.length > 0 ? (
            agendas.map((item) => (
              <View key={item.id} style={styles.agendaItem}>
                <View style={styles.agendaContent}>
                  <Text style={styles.agendaData}>{item.data}</Text>
                  <Text style={styles.agendaArea}>{item.area}</Text>
                  <Text style={styles.agendaMateria}>{item.materia}</Text>
                </View>
                <TouchableOpacity
                  style={styles.btnDelete}
                  onPress={() => deletarAgenda(item.id)}
                >
                  <Text style={styles.textDelete}>✕</Text>
                </TouchableOpacity>
              </View>
            ))
          ) : (
            <Text style={styles.semAgenda}>Nenhum agendamento salvo</Text>
          )}

          <TouchableOpacity
            style={styles.botao}
            onPress={() => setMostrandoForm(true)}
          >
            <Text style={styles.textoBotao}>Novo Agendamento</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.botaoVoltar}
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={styles.textoVoltar}>Voltar para Home</Text>
          </TouchableOpacity>
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    padding: 20,
  },
  titulo: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 25,
  },
  texto: {
    color: "#B8C9E8",
    fontSize: 15,
    textAlign: "center",
    marginBottom: 20,
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
    marginBottom: 15,
  },
  textoBotao: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  botaoVoltar: {
    backgroundColor: "#0B0F1A",
    padding: 16,
    borderRadius: 14,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#0088FF",
    marginBottom: 20,
  },
  textoVoltar: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
  agendaItem: {
    backgroundColor: "#0F1629",
    borderWidth: 1,
    borderColor: "#1E3A6E",
    borderRadius: 14,
    padding: 15,
    marginBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  agendaContent: {
    flex: 1,
  },
  agendaData: {
    color: "#0088FF",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  agendaArea: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 4,
  },
  agendaMateria: {
    color: "#B8C9E8",
    fontSize: 13,
  },
  btnDelete: {
    backgroundColor: "#FF3333",
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 12,
  },
  textDelete: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  semAgenda: {
    color: "#B8C9E8",
    fontSize: 14,
    textAlign: "center",
    marginVertical: 30,
    fontStyle: "italic",
  },
});
