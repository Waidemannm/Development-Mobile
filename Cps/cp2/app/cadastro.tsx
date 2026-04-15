import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text, View } from "react-native";

export default function Cadastro() {
  return (
    <SafeAreaView style={styles.container}>
      
      <View style={styles.content}>
        <Text style={styles.title}>Bem-vindo</Text>

        <Text style={styles.subtitle}>
          Sistema de Cadastro de Usuário
        </Text>

        <Text style={styles.description}>
          Aqui você poderá registrar suas informações de forma rápida e segura.
        </Text>

        <Text style={styles.description}>
          Preencha seus dados corretamente para acessar seu perfil completo.
        </Text>

        <Text style={styles.highlight}>
          ✔ Dados seguros  
          {"\n"}✔ Navegação simples  
          {"\n"}✔ Experiência rápida
        </Text>

        <Text style={styles.footer}>
          Toque em continuar para iniciar seu cadastro
        </Text>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c4ff9d",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  content: {
    alignItems: "center",
    gap: 15,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1e1e1e",
  },

  subtitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
  },

  description: {
    fontSize: 14,
    textAlign: "center",
    color: "#444",
  },

  highlight: {
    fontSize: 14,
    textAlign: "center",
    color: "#1e1e1e",
    marginTop: 10,
    fontWeight: "500",
  },

  footer: {
    marginTop: 20,
    fontSize: 12,
    color: "#555",
    fontStyle: "italic",
    textAlign: "center",
  },
});