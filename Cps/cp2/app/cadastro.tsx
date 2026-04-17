import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from "react";
import { MaskedTextInput } from 'react-native-mask-text';
import { useRouter } from "expo-router";

export default function Cadastro() {
    const router = useRouter();
    const [nome, setNome] = useState("");
    const [rm, setRm] = useState("");
    const [telefone, setTelefone]= useState("");
    const [cpf, setCpf] = useState("");

    const [usuario, setUsuario] = useState({});

    useEffect(() => {
        BuscarDados();
    }, []) 

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

    function validarCampos() {
        if (!nome || !rm || !telefone || !cpf) {
            return "Preencha todos os campos";
        }
        if (rm.length < 8) {
            return "RM inválido";
        }
        if (telefone.length < 15) {
            return "Telefone inválido";
        }
        if (cpf.length < 14) {
            return "CPF inválido";
        }

        return null;
    }

    async function SalvarUsuario() {
        let error = validarCampos()
        if(error){
            Alert.alert("Erro ao salvar", error, [{text: "Fechar", style:"cancel"}])
        }else{
            let novoUsuario = {
                nomeUser: nome, 
                rmUser: rm, 
                telefoneUser: telefone, 
                cpfUser: cpf
            };
            setUsuario(novoUsuario);
            await AsyncStorage.setItem("USUARIO",JSON.stringify(novoUsuario));        
            alert("Usuário Salvo");
            router.push({pathname: "/perfil"});
        }
    }

  return (
    <SafeAreaView style={styles.container}>
      
      <View style={styles.content}>
            <Text style={styles.title}>Bem-vindo</Text>

            <Text style={styles.subtitle}>
            Sistema de Cadastro de Usuário
            </Text>

            <Text style={styles.description}>
            Aqui você poderá registrar suas informações.
            </Text>

            <Text style={styles.description}>
            Preencha seus dados corretamente para acessar seu perfil completo.
            </Text>

            <View style={styles.camp}>
                <MaskedTextInput
                placeholder="Nome"
                style={styles.input}
                value={nome}
                onChangeText={(text)=>setNome(text)}
                />
                <MaskedTextInput
                type="custom"
                mask="AA999999"
                placeholder="Rm (RM999999)"
                style={styles.input}
                value={rm}
                onChangeText={(text)=>setRm(text)}
                />
                <MaskedTextInput
                type="custom"
                mask="(99) 99999-9999"
                placeholder="Telefone"
                style={styles.input}
                value={telefone}
                onChangeText={(text)=>setTelefone(text)}
                />
                <MaskedTextInput
                type="cpf"
                keyboardType="numeric"
                mask="999.999.999-99"
                placeholder="Cpf"
                style={styles.input}
                value={cpf}
                onChangeText={(text)=>setCpf(text)}
                />
                <TouchableOpacity style={styles.btn} onPress={SalvarUsuario}>
                    <Text>Salvar</Text>
                </TouchableOpacity>
            </View>
      </View>

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
  camp:{
    gap:5,
  },
  input:{
    borderWidth:1,
    height:38,
    width:300,
    padding:10,
    borderRadius:15,
    marginVertical:3
  },
  btn:{
    height:50,
    width:300,
    borderRadius:15,
    backgroundColor:"#c1e61f",
    alignItems:"center",
    justifyContent:"center",
    marginVertical:3
  },
});