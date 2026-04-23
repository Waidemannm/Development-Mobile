import { Text, StyleSheet } from "react-native";
import {SafeAreaView } from "react-native-safe-area-context";
import { useCounter } from "../src/context/Counter";

export default function Details(){
    
    const {count} = useCounter();

    return(
        <SafeAreaView style={style.container}>
            <Text>Pagina Detalhes</Text>
            <Text>O valor do contador é: {count}</Text>
        </SafeAreaView>
    );
}
const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#d6168c"
    }
})