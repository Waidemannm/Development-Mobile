import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, Image, View, TextInput, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {

  const [descricao, setDescricao] = useState("");
  const [nome, setNome] = useState("");
  const [curso, setCurso] = useState("");
  const [disciplina, setDisciplina] = useState("");
  const [dados, setDados] = useState(false);

  useEffect(() => {
    if(dados == true){
      alert("Informações de cadastro alterada!")
    }else{
      alert("Bem vindo ao Cp1 - Preencha o formulário!")
    }
  }, [dados]) 

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View>
          <Text style={styles.titulo}>📱 Checkpoint 01 — Formulário de Cadastro em React Native</Text>
          <Image source={require('./assets/fiap.webp')}/>
      </View>
      <View>
        <Text style={styles.titulo}>Formulário de cadastro</Text>
        
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
          value={nome}
          onChangeText={setNome}
          autoCapitalize='words'
        />
        <TextInput
          style={styles.input}
          placeholder="Informe seu curso"
          value={curso}
          onChangeText={setCurso}
          autoCapitalize='words'
        />
        <TextInput
          style={styles.input}
          placeholder="Informe a disciplina"
          value={disciplina}
          onChangeText={setDisciplina}
          autoCapitalize='words'
        />
        <TextInput
          style={styles.input}
          placeholder="Fale um pouco sobre você"
          value={descricao}
          onChangeText={setDescricao}
          autoCapitalize='words'
        />

        <View style={styles.botoes}>
          <Button title='Cadastrar' onPress={() => { setDados(true)}}/>
          <Button  title='Reiniciar Cp1' onPress={() => { setDados(false), setCurso(""), setDescricao(""), setNome(""), setDisciplina("")}}/>
        </View>
        
      </View>
      {dados &&<View>
        <Text style={styles.dados}>Nome: {nome}</Text>
        <Text style={styles.dados}>Curso: {curso}</Text>
        <Text style={styles.dados}>Disciplina: {disciplina}</Text>
        <Text style={styles.dados}>Decrição: {descricao}</Text>
      </View>}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  botoes:{
    gap: 10,
    margin:10
  },
  input:{
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5
  },
  dados:{
    fontSize: 14,
    padding: 5,
    fontWeight: 'bold'
  },
   titulo: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  image:{
    imagem: {
    width: 200,  
    heigh: 200,    
    borderRadius: 20, 
    marginTop: 20,
  },
}});
