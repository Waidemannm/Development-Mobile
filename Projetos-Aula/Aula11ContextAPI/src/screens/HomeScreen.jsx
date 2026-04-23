import {Text,View,Button, StyleSheet} from "react-native"
import { useCounter } from "../context/CounterContext"
import { useTheme } from "../context/ThemeContext"

export default function HomeScreen({navigation}){

    //Pegandos os dados do Context
    const{count,increment, decrement}=useCounter()

    const{theme, alterarTema, light, dark} = useTheme();

    const styles = getStyle(theme, light, dark);
    
    return(
        <View style={styles.container}>
            <Text style={styles.text} >Valor do Contador:{count}</Text>
            <Button 
                title="Incrementar"
                onPress={increment}
            />
            <Button 
                title="Decrementar"
                onPress={decrement}
            />
            <Button 
                title="Tela detalhes"
                onPress={()=> navigation.navigate("details")}
            />
            <Button 
                title="Mudar tema"
                onPress={alterarTema}
            />
        </View>
    )
}

const getStyle = (theme, light, dark) => StyleSheet.create({
    container:{
        flex: 1,
        marginTop: 20,
        backgroundColor:theme==="light"? light.bg: dark.bg,
    },
    text:{
        color: theme==="light"? light.txt: dark.txt,
    }
})