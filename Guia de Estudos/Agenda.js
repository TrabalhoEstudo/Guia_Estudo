import React, { useState } from "react";
import { View, Button, StyleSheet } from "react-native";
import { TextInput, Text } from "react-native-paper";
import { DatePickerModal } from "react-native-paper-dates";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function DetalhesScreen({ navigation, route }) {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState(null);
  const [dataFormatada, setDataFormatada] = useState("");
  const { area, materia } = route.params || {};

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

    alert("Agendamento realizado!");

    navigation.goBack();

  } catch (error) {
    console.log(error);
  }
}

  return (
    <View style={styles.container}>
      <Text variant="headlineMedium" style={styles.titulo}>
        Detalhes
      </Text>

      <Text variant="bodyLarge" style={styles.texto}>
        Aqui aparecem mais informações sobre o item escolhido.
      </Text>

      <TextInput
  label="Área"
  mode="outlined"
  value={area || ""}
  editable={false}
  style={styles.input}
/>

<TextInput
  label="Matéria"
  mode="outlined"
  value={materia || ""}
  editable={false}
  style={styles.input}
/>

      <TextInput
        label="Data"
        mode="outlined"
        value={dataFormatada}
        editable={false}
        style={styles.input}
        onPressIn={() => setOpen(true)}
        right={
          <TextInput.Icon
            icon="calendar"
            onPress={() => setOpen(true)}
          />
        }
      />

      <DatePickerModal
        locale="pt-BR"
        mode="single"
        visible={open}
        onDismiss={onDismiss}
        date={data}
        onConfirm={onConfirm}
      />

      <Button
  title="Salvar Agendamento"
  onPress={salvarAgenda}
/>

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
    textAlign: "center",
    marginBottom: 20,
  },
  texto: {
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    marginBottom: 20,
  },
});
