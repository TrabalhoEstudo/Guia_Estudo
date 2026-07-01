import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function GuiaEstudos({ navigation }) {

// Estado das áreas abertas
  const [areaAberta, setAreaAberta] = useState(null);

// Array de objetos que tem o seu estado modificado
  const [areas, setAreas] = useState([
    {
      nome: "Matemática",
      materias: [
        { nome: "Matemática Básica", concluida: false },
        { nome: "Razão e Proporção", concluida: false },
        { nome: "Porcentagem", concluida: false },
        { nome: "Potenciação e Radiciação", concluida: false },
        { nome: "Equações do 1º Grau", concluida: false },
        { nome: "Equações do 2º Grau", concluida: false },
        { nome: "Funções", concluida: false },
        { nome: "Geometria Plana", concluida: false },
        { nome: "Geometria Espacial", concluida: false },
        { nome: "Trigonometria", concluida: false },
        { nome: "Estatística", concluida: false },
        { nome: "Probabilidade", concluida: false },
        { nome: "Análise Combinatória", concluida: false },
        { nome: "Matrizes", concluida: false },
        { nome: "Logaritmos", concluida: false }
      ]
    },

    {
      nome: "Linguagens",
      materias: [
        { nome: "Interpretação de Texto", concluida: false },
        { nome: "Gramática Básica", concluida: false },
        { nome: "Classes de Palavras", concluida: false },
        { nome: "Sintaxe", concluida: false },
        { nome: "Pontuação", concluida: false },
        { nome: "Concordância", concluida: false },
        { nome: "Regência", concluida: false },
        { nome: "Crase", concluida: false },
        { nome: "Figuras de Linguagem", concluida: false },
        { nome: "Funções da Linguagem", concluida: false },
        { nome: "Gêneros Textuais", concluida: false },
        { nome: "Literatura Brasileira", concluida: false },
        { nome: "Modernismo", concluida: false },
        { nome: "Variação Linguística", concluida: false },
        { nome: "Semântica", concluida: false }
      ]
    },

    {
      nome: "Geografia",
      materias: [
        { nome: "Cartografia", concluida: false },
        { nome: "Fusos Horários", concluida: false },
        { nome: "Geologia", concluida: false },
        { nome: "Relevo", concluida: false },
        { nome: "Climatologia", concluida: false },
        { nome: "Vegetação", concluida: false },
        { nome: "Hidrografia", concluida: false },
        { nome: "População", concluida: false },
        { nome: "Urbanização", concluida: false },
        { nome: "Globalização", concluida: false },
        { nome: "Agropecuária", concluida: false },
        { nome: "Industrialização", concluida: false },
        { nome: "Questões Ambientais", concluida: false },
        { nome: "Geopolítica", concluida: false },
        { nome: "Blocos Econômicos", concluida: false }
      ]
    },

    {
      nome: "História",
      materias: [
        { nome: "Pré-História", concluida: false },
        { nome: "Antiguidade Oriental", concluida: false },
        { nome: "Antiguidade Clássica", concluida: false },
        { nome: "Idade Média", concluida: false },
        { nome: "Idade Moderna", concluida: false },
        { nome: "Iluminismo", concluida: false },
        { nome: "Revolução Francesa", concluida: false },
        { nome: "Revolução Industrial", concluida: false },
        { nome: "Brasil Colônia", concluida: false },
        { nome: "Brasil Império", concluida: false },
        { nome: "Primeira República", concluida: false },
        { nome: "Era Vargas", concluida: false },
        { nome: "Ditadura Militar", concluida: false },
        { nome: "Nova República", concluida: false },
        { nome: "História Contemporânea", concluida: false }
      ]
    },

    {
      nome: "Filosofia",
      materias: [
        { nome: "Introdução à Filosofia", concluida: false },
        { nome: "Sócrates", concluida: false },
        { nome: "Platão", concluida: false },
        { nome: "Aristóteles", concluida: false },
        { nome: "Filosofia Medieval", concluida: false },
        { nome: "Racionalismo", concluida: false },
        { nome: "Empirismo", concluida: false },
        { nome: "Iluminismo", concluida: false },
        { nome: "Ética", concluida: false },
        { nome: "Política", concluida: false },
        { nome: "Existencialismo", concluida: false },
        { nome: "Karl Marx", concluida: false },
        { nome: "Nietzsche", concluida: false },
        { nome: "Michel Foucault", concluida: false },
        { nome: "Escola de Frankfurt", concluida: false }
      ]
    },

     {
      nome: "Sociologia",
      materias: [
        { nome: "Introdução à Sociologia", concluida: false },
        { nome: "Cultura", concluida: false },
        { nome: "Socialização", concluida: false },
        { nome: "Cidadania", concluida: false },
        { nome: "Movimentos Sociais", concluida: false },
        { nome: "Estado", concluida: false },
        { nome: "Democracia", concluida: false },
        { nome: "Desigualdade Social", concluida: false },
        { nome: "Globalização", concluida: false },
        { nome: "Trabalho", concluida: false },
        { nome: "Karl Marx", concluida: false },
        { nome: "Émile Durkheim", concluida: false },
        { nome: "Max Weber", concluida: false },
        { nome: "Políticas Públicas", concluida: false },
        { nome: "Direitos Humanos", concluida: false }
      ]
    },

     {
      nome: "Biologia",
      materias: [
        { nome: "Origem da Vida", concluida: false },
        { nome: "Citologia", concluida: false },
        { nome: "Organelas Celulares", concluida: false },
        { nome: "Divisão Celular", concluida: false },
        { nome: "Genética", concluida: false },
        { nome: "DNA e RNA", concluida: false },
        { nome: "Evolução", concluida: false },
        { nome: "Ecologia", concluida: false },
        { nome: "Botânica", concluida: false },
        { nome: "Zoologia", concluida: false },
        { nome: "Fisiologia Humana", concluida: false },
        { nome: "Sistema Imunológico", concluida: false },
        { nome: "Biotecnologia", concluida: false },
        { nome: "Parasitologia", concluida: false },
        { nome: "Vírus e Bactérias", concluida: false }
      ]
    },

     {
      nome: "Química",
      materias: [
        { nome: "Estrutura Atômica", concluida: false },
        { nome: "Tabela Periódica", concluida: false },
        { nome: "Ligações Químicas", concluida: false },
        { nome: "Funções Inorgânicas", concluida: false },
        { nome: "Reações Químicas", concluida: false },
        { nome: "Estequiometria", concluida: false },
        { nome: "Soluções", concluida: false },
        { nome: "Termoquímica", concluida: false },
        { nome: "Cinética Química", concluida: false },
        { nome: "Equilíbrio Químico", concluida: false },
        { nome: "Eletroquímica", concluida: false },
        { nome: "Química Orgânica", concluida: false },
        { nome: "Isomeria", concluida: false },
        { nome: "Polímeros", concluida: false },
        { nome: "Química Ambiental", concluida: false }
      ]
    },

     {
      nome: "Física",
      materias: [
        { nome: "Grandezas Físicas", concluida: false },
        { nome: "Cinemática", concluida: false },
        { nome: "Movimento Uniforme", concluida: false },
        { nome: "Movimento Uniformemente Variado", concluida: false },
        { nome: "Leis de Newton", concluida: false },
        { nome: "Trabalho e Energia", concluida: false },
        { nome: "Impulso e Quantidade de Movimento", concluida: false },
        { nome: "Gravitação", concluida: false },
        { nome: "Hidrostática", concluida: false },
        { nome: "Termologia", concluida: false },
        { nome: "Óptica", concluida: false },
        { nome: "Ondulatória", concluida: false },
        { nome: "Eletricidade", concluida: false },
        { nome: "Magnetismo", concluida: false },
        { nome: "Física Moderna", concluida: false }
      ]
    },

     {
      nome: "Redação",
      materias: [
        { nome: "Estrutura da Redação ENEM", concluida: false },
        { nome: "Competência 1", concluida: false },
        { nome: "Competência 2", concluida: false },
        { nome: "Competência 3", concluida: false },
        { nome: "Competência 4", concluida: false },
        { nome: "Competência 5", concluida: false },
        { nome: "Tipos de Introdução", concluida: false },
        { nome: "Desenvolvimento", concluida: false },
        { nome: "Conclusão", concluida: false },
        { nome: "Proposta de Intervenção", concluida: false },
        { nome: "Coesão", concluida: false },
        { nome: "Coerência", concluida: false },
        { nome: "Argumentação", concluida: false },
        { nome: "Repertório Sociocultural", concluida: false },
        { nome: "Prática de Redação", concluida: false }
      ]
    },
  ]);

// Função para marcar ou desmarcar uma matéria como concluída
  async function marcarMateria(areaNome, materiaNome) {
    const novasAreas = areas.map((area) => {
      if (area.nome !== areaNome) {
        return area;
      }

      return {
        ...area,
        materias: area.materias.map((materia) => {
          if (materia.nome !== materiaNome) {
            return materia;
          }

          return {
            ...materia,
            concluida: !materia.concluida
          };
        }),
      };
    });

// Atualiza a tela
    setAreas(novasAreas);

// Salva os dados
    try {
      await AsyncStorage.setItem("areas", JSON.stringify(novasAreas));
    } catch (error) {
      console.log(error);
    }
  }

// Carrega os dados
  async function carregarAreas() {
    try {
      const dados = await AsyncStorage.getItem("areas");

      if (dados !== null) {
        setAreas(JSON.parse(dados));
      }
    } catch (error) {
      console.log(error);
    }
  }

// Executa o carregamento dos dados quando o componente é montado
  useEffect(() => {
    carregarAreas();
  }, []);

// Funcionamento visual do aplicativo
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.conteudo}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.titulo}>Guia de Estudos</Text>

      {areas.map((area, index) => {

// Calcula o progresso da área
        const concluidas = area.materias.filter(
          (materia) => materia.concluida
        ).length;

        const total = area.materias.length;
        const porcentagem = Math.round((concluidas / total) * 100);

        return (
          <View key={index} style={styles.card}>

{/* Botão da área que abre ou fecha a lista de matérias */}
            <TouchableOpacity
              style={styles.botao}
              onPress={() => setAreaAberta(
                areaAberta === area.nome ? null : area.nome
              )}
            >
              <Text style={styles.area}>
                {areaAberta === area.nome ? "▼ " : "▶ "}{area.nome}
              </Text>

{/* Barra de progresso */}
              <Text style={styles.progresso}>
                {concluidas} de {total} concluídas ({porcentagem}%)
              </Text>

              <View style={styles.barra}>
                <View
                  style={[styles.preenchimento, { width: `${porcentagem}%` }]}
                />
              </View>
            </TouchableOpacity>

{/* Executa o marca/desmarca da matéria */}
            {areaAberta === area.nome && (
              area.materias.map((materia, i) => (
              <View key={i} style={styles.itemMateria}>

            <TouchableOpacity
              style={{ flex: 1 }}
              onPress={() => marcarMateria(area.nome, materia.nome)}
            >
            <Text style={styles.materia}>
              {materia.concluida ? "☑ " : "☐ "}
              {materia.nome}
            </Text>
          </TouchableOpacity>
    </View>
  ))
)}

{/* Menu para navegar à tela inicial ou a de agenda */}
      <View style={styles.menuInferior}>
        <TouchableOpacity
          style={styles.botaoMenu}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.textoMenu}>
            Tela Inicial
          </Text>
        </TouchableOpacity>
      </View>
  );
}

// Estilização do aplicativo
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#000000",
  },
  conteudo: {
    paddingBottom: 40,
  },
  card: {
    backgroundColor: "#0B0F1A",
    borderRadius: 16,
    padding: 2,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#152238",
  },
  titulo: {
    fontSize: 26,
    color: "#FFFFFF",
    fontWeight: "bold",
    marginBottom: 24,
    letterSpacing: 1,
  },
  botao: {
    backgroundColor: "#0F1629",
    padding: 18,
    marginBottom: 2,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#1E3A6E",
  },
  area: {
    color: "#FFFFFF",
    fontSize: 19,
    fontWeight: "700",
    letterSpacing: 0.5,
  },
  materia: {
    color: "#B8C9E8",
    fontSize: 16,
    marginLeft: 20,
    marginBottom: 6,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#111B33",
  },
  itemMateria: {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: 8,
},

botaoAgenda: {
  backgroundColor: "#0088FF",
  paddingHorizontal: 12,
  paddingVertical: 8,
  borderRadius: 8,
  marginRight: 10,
},

textoAgenda: {
  color: "#FFF",
  fontWeight: "bold",
},
  progresso: {
    color: "#6B8EBF",
    fontSize: 14,
    marginTop: 6,
    marginBottom: 10,
  },
  barra: {
    width: "100%",
    height: 8,
    backgroundColor: "#0A0F1A",
    borderRadius: 4,
    overflow: "hidden",
  },
  preenchimento: {
    height: "100%",
    backgroundColor: "#0088FF",
    borderRadius: 4,
  },
  menuInferior: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    paddingTop: 16,
    gap: 10,
    borderTopWidth: 1,
    borderTopColor: "#152238",
  },
  botaoMenu: {
    flex: 1,
    backgroundColor: "#0B0F1A",
    padding: 16,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#0088FF",
    alignItems: "center",
  },
  textoMenu: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 16,
  },
});

