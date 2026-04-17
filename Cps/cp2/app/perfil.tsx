import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text, View, Image } from "react-native";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Perfil(){

    const [nome, setNome] = useState("");
    const [rm, setRm] = useState("");
    const [telefone, setTelefone]= useState("");
    const [cpf, setCpf] = useState("");
    
    const [usuario, setUsuario] = useState({});

    const buscarDados = BuscarDados()

    useEffect(() => {
        BuscarDados();
    }, [buscarDados]) 

    async function BuscarDados(){
        let data = await AsyncStorage.getItem("USUARIO");
        if(data != null){
            const usuarioObj = JSON.parse(data);
            setUsuario(usuarioObj);
            setNome(usuarioObj.nomeUser)
            setRm(usuarioObj.rmUser)
            setTelefone(usuarioObj.telefoneUser)
            setCpf(usuarioObj.cpfUser)
        }
    }
    
    return(
        <SafeAreaView style={styles.container}>
            <Image style={styles.img} source={require("../assets/foto.jpeg")}/>
            <Text style={styles.title}>Bem-vindo {nome}</Text>
    
            <Text style={styles.description}>
                Aqui estão suas informações da conta
            </Text>
    
            <Text style={styles.infos}>
                RM: {rm}
            </Text>
            <Text style={styles.infos}>
                Telefone: {telefone}
            </Text>
            <Text style={styles.infos}>
                CPF: {cpf}
            </Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7e6ef1",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
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
  infos: {
    fontSize: 14,
    textAlign: "center",
    color: "#141313",
  },
  img:{
    borderWidth:2,
    borderColor: "#c1e61f",
    height:200,
    width:200,
    borderRadius: 100,
    marginBottom: 20
  },
});