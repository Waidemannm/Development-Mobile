import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default () => {

    const{nome} = useLocalSearchParams();
    const{idade} = useLocalSearchParams();

    return(
        <SafeAreaView style={style.container}>
            <Text>Ola <Text style={{fontWeight:800}}>Nome: {nome} Idade: {idade}</Text></Text>
        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#d616b6"
    }
})