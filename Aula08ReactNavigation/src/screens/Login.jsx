import {StyleSheet, Text, View } from "react-native"

export default () => {
    return(
        <View style={styles.container}>
            <Text>Tela Login</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#82ee88"
}
})