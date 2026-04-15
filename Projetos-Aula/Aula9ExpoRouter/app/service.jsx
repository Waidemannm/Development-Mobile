import { useLocalSearchParams } from "expo-router/build/hooks";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Service(){
    const {os} = useLocalSearchParams()
    return(
        <SafeAreaView style={style.container}>
            <Text>Service Page</Text>
            <Text>Sistema utilizado: {os}</Text>
        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#16d6b0"
    }
})

