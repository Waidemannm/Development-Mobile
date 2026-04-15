import {StyleSheet, Text, View } from "react-native"

export default () => {
    return(
        <View style={styles.container}>
            <Text>Tela Serviço</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#8287ee"
}
})