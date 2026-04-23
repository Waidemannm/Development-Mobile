import { Text, StyleSheet, View , Button} from "react-native";
import {SafeAreaView } from "react-native-safe-area-context";
import { useCounter } from "../src/context/Counter";
import { useRouter } from "expo-router";

export default function Home(){
    
    const router = useRouter();

    const {increment, decrement} = useCounter();

    return(
        <SafeAreaView style={style.container}>
            <Text>Pagina Inicial</Text>
            <View style={{gap:15}}>
                <Button title="Aumente o contador" onPress={()=>{increment()}}/>
                <Button title="Diminua o contador" onPress={()=>{decrement()}}/>
            </View>
            <Text>Para ver o valor do contador acesse a pagina de detalhes</Text>
            <Button title="Pagina Detalhes" onPress={()=>router.push({
                        pathname: "/details"
                    })}/>
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
