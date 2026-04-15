import { useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, Button, View, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
    const router = useRouter();

    const [os, setOs] = useState("");
    const [osSalvo, setOsSalvo] = useState("");

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Pagina Principal</Text>

            <View style={{ gap: 10 }}>
                <Button 
                    title="Pagina User" 
                    onPress={() => router.push({
                        pathname: "/user",
                        params: { nome: "Moises", idade: 20 }
                    })}
                />

                <Button 
                    title="Pagina de serviços" 
                    onPress={() => {
                        if (!osSalvo) {
                            alert("Salve o sistema primeiro!");
                            return;
                        }

                        router.push({
                            pathname: "/service",
                            params: { os: osSalvo }
                        });
                    }}
                />
            </View>

            <View style={{ margin: 25, gap: 10 }}>
                <Text>Digite o sistema operacional</Text>

                <TextInput
                    placeholder="IOS"
                    style={styles.input}
                    value={os}
                    onChangeText={setOs}
                />

                <Button 
                    title="Salvar"
                    onPress={() => {
                        setOsSalvo(os);
                        setOs(""); // limpa input
                    }}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#c4ff9d"
    },
    input: {
        borderWidth: 1,
        borderRadius: 4,
        padding: 5,
        width: 200
    },
    title: {
        fontWeight: "bold",
        margin: 10
    },
});