import {StyleSheet, Text, View } from "react-native"

export default () => {
    return(
        <View style={styles.container}>
            <Text>Olá, bem-vindo a tela inicial</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#f3a5a5"
    }
})